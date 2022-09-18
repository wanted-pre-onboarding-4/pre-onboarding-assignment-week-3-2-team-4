# Assginment #5

## 🎯 프로젝트 목표

#### API 서버와 통신해서 작동하는 댓글 프로젝트를 Redux를 통해 구현

## ⏰ 프로젝트 기간

#### 2022-09-16 ~ 2022-09-19

## :nut_and_bolt: 구현 기능

1. 예시 이미지와 같이 댓글 불러오기, 작성, 수정, 삭제가 동작하도록 기능 구현

   ![https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif](https://user-images.githubusercontent.com/12206933/83601436-8e15b780-a5ab-11ea-91ad-04a302579c90.gif)

2. 페이지네이션

3. 댓글 작성, 수정, 삭제 후 동작

   - 댓글 작성하고 난 뒤: 다른 페이지에 위치하고 있었더라도 1페이지로 이동, 입력 폼 초기화
   - 댓글 수정하고 난 뒤: 현재 보고있는 페이지 유지, 입력 폼 초기화
   - 삭제하고 난 뒤: 1페이지로 이동

## :hammer: 사용 스택

![ReactJS](https://img.shields.io/badge/ReactJS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Styled-Components](https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## :handshake: 프로젝트 팀원

| 이름          |               역할                |
| ------------- | :-------------------------------: |
| 설재혁 / 팀장 | 요구사항 초기 버전 구현, 리팩토링 |
| 김명원        | 요구사항 초기 버전 구현, 리팩토링 |
| 박보선        | 요구사항 초기 버전 구현, 리팩토링 |
| 김지혜        | 요구사항 초기 버전 구현, 리팩토링 |
| 이시형        | 요구사항 초기 버전 구현, 리팩토링 |
| 홍주완        | 요구사항 초기 버전 구현, 리팩토링 |
| 이후경        | 요구사항 초기 버전 구현, 리팩토링 |

## 📖 WiKi

- [Git-Flow](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#git-flow)
- [Commit-Convention](https://github.com/wanted-pre-onboarding-4/Fruitte/wiki/Convention-&-Git-Flow#commit-convention)

## 🖥 Getting Started

1. `Clone` the repository

   ```markdown
   $ git clone https://github.com/wanted-pre-onboarding-4/pre-onboarding-assignment-week-3-2-team-4.git
   ```

2. `Install` dependencies

   ```markdown
   $ npm install
   ```

3. `Set` environment variables

   1. 내려받은 프로젝트의 최상위 폴더 안에 `.env.local` 파일을 생성합니다.

   2. `.env.template` 파일에 존재하는 환경 변수 이름과 같은 이름의 환경 변수를 `.env.local` 파일 안에 생성합니다.

   3. `.env.local` 파일 내에 아래 값을 추가합니다.

      ```markdown
      SKIP_PREFLIGHT_CHECK=true
      REACT_APP_API_BASE_URL = http://localhost:4000
      ```

4. `start` the project

   ```markdown
   $ npm run api
   $ npm start
   ```

# 📒 과제 관련 안내 사항

## 참고자료

- API 참고사항

  - 프로젝트내에서 `npm install` 후, `npm run api` 실행 시 `[localhost:4000](http://localhost:4000)` 에 API 서버 실행
  - [http://localhost:4000/comments](http://localhost:4000/comments)에 `GET` 요청시 `data.json` 파일에 기록된 데이터 확인 가능
  - API 를 통해 입력하거나 수정하면 data.json 파일내용도 변경됨
  - 총 댓글수는 `/comments` API로 호출 후 응답값을 통해서 직접 계산.
  - 서버는 json-server 라이브러리 이용해서 구축됨

    - API 사용법에 대한 추가정보는 공식문서 참고: [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

      | method | url                   |
      | ------ | --------------------- |
      | GET    | /comments             |
      | GET    | /comments/{commentId} |
      | POST   | /comments             |
      | PUT    | /comments/{commentId} |
      | DELETE | /comments/{commentId} |

  - API 호출 예시:
    - 한페이지에 4개의 게시물이 보이고, 최근 게시물부터 정렬해서 3페이지를 보고 싶은 경우
    - GET `/comments?_page=3&_limit=4&_order=desc&_sort=id`

## 요구 사항

- Redux 환경설정은 자유롭게 진행
  - Redux-saga or Redux-thunk 자유롭게 선택 가능
  - 미들웨어 사용안하는 것도 가능
- Redux logger, Redux-Devtools 설정 필수
- Redux를 이용한 비동기 처리 필수

## 개발 조건 및 환경

- 언어 : JavaScript / TypeScript
- 필수 기술: React, Redux, Redux-Logger, Redux-Devtools
- 선택 기술:
  - Redux Middleware
  - 스타일 관련 라이브러리(styled-components, emotion, ui kit 등)
  - HTTP Client(axios 등)
- 위에 기재된 라이브러리 외 사용 불가
