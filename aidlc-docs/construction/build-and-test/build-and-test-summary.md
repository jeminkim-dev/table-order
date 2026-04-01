# Build and Test Summary - Backend API

## 빌드 정보
| 항목 | 값 |
|---|---|
| 빌드 도구 | Gradle 8.x |
| 빌드 명령 | `./gradlew clean build` |
| 빌드 아티팩트 | `build/libs/table-order-backend-0.0.1-SNAPSHOT.jar` |
| Docker 이미지 | `eclipse-temurin:17-jre-alpine` |

## 테스트 실행 요약

### 단위 테스트 (PBT)
| 테스트 | 대상 | 속성 수 |
|---|---|---|
| AuthServicePBTTest | 인증 | 3개 |
| MenuServicePBTTest | 메뉴 | 4개 |
| OrderServicePBTTest | 주문 | 5개 |
| TableSessionServicePBTTest | 세션 | 3개 |
| SseServicePBTTest | SSE | 2개 |
| **합계** | | **17개 속성** |

### 통합 테스트
| 시나리오 | 설명 |
|---|---|
| 고객 주문 플로우 | 로그인 → 메뉴 조회 → 주문 생성 |
| 관리자 주문 관리 | 로그인 → 주문 조회 → 상태 변경 |
| SSE 실시간 통신 | 구독 → 주문 생성 → 이벤트 수신 |
| 테이블 이용 완료 | 이용 완료 → 이력 이동 → 과거 내역 조회 |

### 성능 테스트
| 항목 | 목표 |
|---|---|
| REST API 응답 | 200ms 이내 |
| SSE 이벤트 전달 | 2초 이내 |

## 생성된 지침 파일
1. `build-instructions.md` - 빌드 방법
2. `unit-test-instructions.md` - 단위 테스트 실행
3. `integration-test-instructions.md` - 통합 테스트 시나리오
4. `performance-test-instructions.md` - 성능 테스트 방법
5. `build-and-test-summary.md` - 이 파일

## 다음 단계
빌드 및 테스트 지침을 따라 실행하고, 모든 테스트가 통과하면 배포 준비 완료.
