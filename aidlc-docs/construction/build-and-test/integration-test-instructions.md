# Integration Test Instructions - Backend API

## 목적
서비스 간 상호작용과 전체 API 플로우를 검증합니다.

## 테스트 환경 설정

### 1. 백엔드 서버 시작
```bash
cd backend
./gradlew bootRun
```

### 2. 시드 데이터 확인
서버 시작 시 자동으로 시드 데이터가 생성됩니다:
- 매장: STORE001 (맛있는 식당), STORE002 (행복한 카페)
- 관리자: admin / admin123
- 테이블: T01~T05 / table1~table5

## 통합 테스트 시나리오

### 시나리오 1: 고객 주문 플로우
1. 테이블 로그인
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"storeCode":"STORE001","username":"T01","password":"table1","role":"TABLE"}'
```
2. 토큰으로 메뉴 조회
```bash
curl http://localhost:8080/api/stores/1/categories
curl http://localhost:8080/api/stores/1/menus
```
3. 주문 생성 (Bearer 토큰 필요)
```bash
curl -X POST http://localhost:8080/api/stores/1/orders \
  -H "Authorization: Bearer {TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"tableId":1,"sessionId":"{SESSION_UUID}","items":[{"menuId":1,"menuName":"김치찌개","quantity":2,"unitPrice":8000}]}'
```

### 시나리오 2: 관리자 주문 관리 플로우
1. 관리자 로그인
```bash
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"storeCode":"STORE001","username":"admin","password":"admin123","role":"ADMIN"}'
```
2. 전체 주문 조회
```bash
curl http://localhost:8080/api/stores/1/orders/all \
  -H "Authorization: Bearer {ADMIN_TOKEN}"
```
3. 주문 상태 변경
```bash
curl -X PATCH http://localhost:8080/api/stores/1/orders/{orderId}/status \
  -H "Authorization: Bearer {ADMIN_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"status":"PREPARING"}'
```

### 시나리오 3: SSE 실시간 통신
1. 관리자 SSE 구독 (별도 터미널)
```bash
curl -N http://localhost:8080/api/stores/1/sse/orders \
  -H "Authorization: Bearer {ADMIN_TOKEN}"
```
2. 고객이 주문 생성 → SSE로 실시간 수신 확인

### 시나리오 4: 테이블 이용 완료
1. 이용 완료 처리
```bash
curl -X POST http://localhost:8080/api/stores/1/tables/1/complete \
  -H "Authorization: Bearer {ADMIN_TOKEN}"
```
2. 과거 내역 조회
```bash
curl http://localhost:8080/api/stores/1/tables/1/history \
  -H "Authorization: Bearer {ADMIN_TOKEN}"
```

## 검증 포인트
- 인증 토큰 발급 및 검증 동작
- 역할 기반 접근 제어 (TABLE vs ADMIN)
- 주문 생성 → SSE 이벤트 수신
- 주문 상태 전이 규칙 준수
- 이용 완료 → 주문 이력 이동
