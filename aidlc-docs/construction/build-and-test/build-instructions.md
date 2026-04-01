# Build Instructions - Backend API

## 사전 요구사항
- Java 17+ (JDK)
- Gradle 8.x (또는 gradlew 래퍼 사용)
- Docker & Docker Compose (컨테이너 빌드 시)

## 빌드 단계

### 1. 의존성 설치
```bash
cd backend
./gradlew dependencies
```

### 2. 컴파일 및 빌드
```bash
./gradlew clean build
```

### 3. 테스트 제외 빌드 (빠른 빌드)
```bash
./gradlew bootJar -x test
```

### 4. 빌드 결과 확인
- JAR 파일: `backend/build/libs/table-order-backend-0.0.1-SNAPSHOT.jar`
- 빌드 성공 시: `BUILD SUCCESSFUL` 메시지 출력

## Docker 빌드

### 백엔드만 빌드
```bash
docker-compose build backend
```

### 전체 시스템 빌드 및 실행
```bash
docker-compose up --build
```

## 로컬 실행 (Docker 없이)

```bash
cd backend
mkdir -p data
./gradlew bootRun
```

접근:
- API: http://localhost:8080
- Swagger UI: http://localhost:8080/swagger-ui.html
- API Docs: http://localhost:8080/v3/api-docs

## 트러블슈팅

### SQLite 파일 권한 오류
```bash
mkdir -p backend/data
chmod 755 backend/data
```

### 포트 충돌
```bash
# 8080 포트 사용 중인 프로세스 확인
lsof -i :8080
```
