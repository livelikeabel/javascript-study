### ✨ 구현
- 순수하게 react만 사용했습니다. (프로젝트 크기가 작기 때문에 redux나 미들웨어 사용하지 않았습니다)
- App에서 global한 state를 관리했습니다.
- 컴포넌트를 작은 단위로 만들었습니다.
- 무한 스크롤링과 sticky 헤더를 구현 했습니다.
- media query를 사용하여 responsive UI를 고려했습니다.

### ⚙️ 프로젝트 실행하기

mock 서버 사용하기
```
1. npm install -g json-server
2. json-server mock-data/db.json --port 8080
```

client 실행하기
```
1. yarn
2. yarn start
```

storybook 실행하기
```
1. yarn storybook
```