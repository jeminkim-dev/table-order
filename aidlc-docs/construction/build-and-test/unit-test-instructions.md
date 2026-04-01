# Unit Test Execution - Backend API

## 전체 테스트 실행

```bash
cd backend
./gradlew test
```

## PBT 테스트 포함 실행

jqwik PBT 테스트는 JUnit Platform에 통합되어 `./gradlew test`로 함께 실행됩니다.

## 테스트 목록

### JUnit 5 + jqwik PBT 테스트
| 테스트 클래스 | 대상 | 유형 |
|---|---|---|
| AuthServicePBTTest | 인증 (잠금 정책, 토큰 왕복) | PBT |
| MenuServicePBTTest | 메뉴 (가격 범위, 소프트 삭제) | PBT |
| OrderServicePBTTest | 주문 (금액 계산, 상태 전이, 주문번호) | PBT |
| TableSessionServicePBTTest | 세션 (생명주기, 이용 완료) | PBT |
| SseServicePBTTest | SSE (이벤트 유형, 구독자 없음 처리) | PBT |

## 테스트 결과 확인

```bash
# HTML 리포트
open backend/build/reports/tests/test/index.html

# 콘솔 출력
./gradlew test --info
```

## 개별 테스트 실행

```bash
# 특정 테스트 클래스
./gradlew test --tests "com.tableorder.order.OrderServicePBTTest"

# 특정 패키지
./gradlew test --tests "com.tableorder.auth.*"
```

## 기대 결과
- 전체 PBT 테스트 통과
- 테스트 커버리지: 서비스 레이어 핵심 비즈니스 로직 커버
