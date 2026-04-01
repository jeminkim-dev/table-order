# Build Instructions - Unit 3: Admin Frontend

## Prerequisites
- Node.js 20.x LTS
- npm 10.x
- Docker (Docker Compose 실행 시)

## Build Steps

### 1. Install Dependencies
```bash
cd frontend
npm install
```

### 2. Configure Environment
```bash
# 개발 환경 (기본값 - vite.config.ts에 프록시 설정됨)
# 별도 환경 변수 불필요

# 프로덕션 빌드 시 (선택)
# export VITE_API_BASE_URL=/api
```

### 3. Build
```bash
# 개발 서버 실행
npm run dev
# → http://localhost:5173/admin/login

# 프로덕션 빌드
npm run build
# → dist/ 디렉토리에 빌드 결과물 생성
```

### 4. Docker Build
```bash
# 프론트엔드 컨테이너 빌드
docker build -t table-order-frontend ./frontend

# Docker Compose로 전체 시스템 실행
docker-compose up --build
# → http://localhost:3000/admin/login
```

### 5. Verify Build Success
- **Expected Output**: `dist/` 디렉토리에 `index.html`, `assets/` 폴더 생성
- **Build Artifacts**: `dist/index.html`, `dist/assets/*.js`, `dist/assets/*.css`
- **번들 사이즈**: gzip 기준 500KB 이하 목표

## Troubleshooting

### npm install 실패
- **원인**: Node.js 버전 불일치
- **해결**: `node -v`로 버전 확인, 20.x LTS 사용

### TypeScript 컴파일 에러
- **원인**: 타입 불일치 또는 strict 모드 위반
- **해결**: 에러 메시지의 파일/라인 확인 후 타입 수정
