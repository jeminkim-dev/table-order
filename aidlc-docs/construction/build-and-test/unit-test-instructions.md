# Unit Test Execution - Unit 3: Admin Frontend

## Run Unit Tests

### 1. Execute All Unit Tests
```bash
cd frontend
npm run test
# 또는
npx vitest --run
```

### 2. Execute PBT Tests Only
```bash
npx vitest --run --reporter=verbose src/admin/__tests__/*.pbt.test.ts
```

### 3. Execute Example-Based Tests Only
```bash
npx vitest --run --reporter=verbose src/admin/__tests__/*.test.ts --exclude='**/*.pbt.test.ts'
```

## Expected Results

### PBT Tests (3 files)
| 파일 | 테스트 수 | 설명 |
|---|---|---|
| orderReducer.pbt.test.ts | 4 | SET_ORDERS invariant, ADD_ORDER count, UPDATE idempotence, REMOVE count |
| menuReducer.pbt.test.ts | 3 | ADD count, REORDER preserve, REMOVE count |
| validation.pbt.test.ts | 3 | valid no errors, empty name error, negative price error |

### Example-Based Tests (3 files)
| 파일 | 테스트 수 | 설명 |
|---|---|---|
| orderReducer.test.ts | 5 | SET, ADD, UPDATE, REMOVE, RESET |
| menuReducer.test.ts | 4 | SET, ADD, UPDATE, REMOVE |
| authReducer.test.ts | 3 | LOGIN, LOGOUT, TOKEN_EXPIRED |

### Total: 22 tests, 0 failures expected

## PBT Configuration (PBT-08)
- **Seed**: 42 (고정 시드로 재현성 보장)
- **Shrinking**: 활성화 (fast-check 기본값)
- **numRuns**: 50~200 (테스트별 설정)
- **실패 시**: 시드 값과 최소 재현 입력이 출력됨

## Fix Failing Tests
1. 테스트 출력에서 실패한 테스트 케이스 확인
2. PBT 실패 시: shrunk 입력값 확인 → 해당 케이스로 example-based 회귀 테스트 추가
3. 코드 수정 후 `npm run test`로 재실행
