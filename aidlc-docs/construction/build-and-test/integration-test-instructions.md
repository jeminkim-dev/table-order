# Integration Test Instructions - Unit 3: Admin Frontend

## Purpose
프론트엔드와 백엔드 API 간의 통합을 검증합니다.
Unit 1 (Backend API)이 완성된 후 실행합니다.

## Setup Integration Test Environment

### 1. Start Backend Service
```bash
# Docker Compose로 전체 시스템 실행
docker-compose up --build

# 또는 백엔드만 실행
cd backend
./gradlew bootRun
```

### 2. Start Frontend Dev Server
```bash
cd frontend
npm run dev
```

## Test Scenarios

### Scenario 1: 관리자 로그인 → 대시보드 접근
- **설명**: 관리자 로그인 후 대시보드 페이지 접근 확인
- **테스트 단계**:
  1. http://localhost:5173/admin/login 접속
  2. 시드 데이터의 관리자 계정으로 로그인
  3. 대시보드 페이지 리다이렉트 확인
  4. SSE 연결 상태 "실시간 연결됨" 확인
- **예상 결과**: 대시보드에 테이블 카드 그리드 표시

### Scenario 2: SSE 실시간 주문 수신
- **설명**: 고객 주문 생성 시 관리자 대시보드에 실시간 반영
- **테스트 단계**:
  1. 관리자 대시보드 열기
  2. 고객 앱에서 주문 생성 (또는 API 직접 호출)
  3. 대시보드에 신규 주문 카드 표시 확인
  4. 하이라이트 애니메이션 확인
- **예상 결과**: 2초 이내 주문 표시, 5초간 하이라이트

### Scenario 3: 주문 상태 변경
- **설명**: 관리자가 주문 상태를 변경하면 즉시 반영
- **테스트 단계**:
  1. 대시보드에서 테이블 카드 클릭
  2. 주문 상세 모달에서 상태 드롭다운 변경
  3. 상태 배지 업데이트 확인
- **예상 결과**: 상태 즉시 변경, 토스트 알림 표시

### Scenario 4: 테이블 이용 완료
- **설명**: 테이블 이용 완료 시 주문 리셋 확인
- **테스트 단계**:
  1. 테이블 관리 페이지 접속
  2. 이용 완료 버튼 클릭 → 확인 팝업 → 확인
  3. 테이블 카드 리셋 확인
- **예상 결과**: 주문 목록 비우기, 총액 0원

### Scenario 5: 메뉴 CRUD
- **설명**: 메뉴 등록/수정/삭제 전체 플로우
- **테스트 단계**:
  1. 메뉴 관리 페이지 접속
  2. 메뉴 등록 → 목록에 추가 확인
  3. 메뉴 수정 → 변경 반영 확인
  4. 메뉴 삭제 → 목록에서 제거 확인
- **예상 결과**: 각 동작 후 토스트 알림 + 목록 갱신

## Cleanup
```bash
docker-compose down
```
