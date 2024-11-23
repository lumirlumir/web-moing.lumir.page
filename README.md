# ChatGPT를 활용한 인터뷰 서비스 개발

이 문서는 '전북대학교' '산학실전캡스톤2(2분반)' '김용현 김영수 김영아' 팀의 'ChatGPT를 활용한 인터뷰 서비스 개발' 프로젝트에 관한 문서이다. 해당 프로젝트에 관련된 모든 내용들은 [***Github Repository***](https://github.com/lumirlumir/web-moing.lumir.page)를 통해 관리된다.

## 0. Index

- [0. Index](#0-index)
- [1. Basic Information](#1-basic-information)
  - [1-1. Links](#1-1-links)
  - [1-2. Project Info](#1-2-project-info)
  - [1-3. Team Info](#1-3-team-info)
  - [1-4. Scheduling Info](#1-4-scheduling-info)
  - [1-5. Meeting Info](#1-5-meeting-info)
- [2. Requirements Specification](#2-requirements-specification)
  - [2-1. 참여 기관의 제안 내용](#2-1-참여-기관의-제안-내용)
  - [2-2. 과제 배경 및 목적](#2-2-과제-배경-및-목적)
  - [2-3. 기대 효과 및 활용 방안](#2-3-기대-효과-및-활용-방안)
  - [2-4. 멘토링 진행 내역](#2-4-멘토링-진행-내역)
- [3. Design](#3-design)
  - [3-1. Web Front-End Development](#3-1-web-front-end-development)
  - [3-2. Chat-GPT Prompt Engineering](#3-2-chatgpt-prompt-engineering)
  - [3-3. Administrative Processing and Data Research](#3-3-administrative-processing-and-data-research)
- [4. Implementation](#4-implementation)

## 1. Basic Information

### 1-1. Links

- [***Github Repository***](https://github.com/lumirlumir/web-moing.lumir.page)
- [***Github Issues***](https://github.com/lumirlumir/web-moing.lumir.page/issues)
- [***Github Projects***](https://github.com/users/lumirlumir/projects/2)
- [***PPT_Mid***](https://www.miricanvas.com/v/134hi5w)

### 1-2. Project Info

- 과제명: ChatGPT를 활용한 인터뷰 서비스 개발
- 지원 유형: 산학 과제
- 과제 분야: 인공지능, 웹서비스
- 수행 기간: 2024년 03월 25일 ~ 2024년 06월 17일

### 1-3. Team Info

- 팀명: 김용현 김영수 김영아
- 팀장: 김용현
- 팀원: 김용현, 김영수, 김영아
- 역할:

  이름 | 담당 | 수행역할 | 비고
  :---: | :--- | :--- | :---:
  김용현 | Web Front-End Development | React.js 기반의 SPA Front-End Web Page 개발, 각종 마크다운 문서ㆍ한글 문서ㆍ 계획서ㆍ보고서 작성, Repository 관리, 발표 등. | 팀장
  김영수 | Administrative Processing, Research | 행정 처리, 재무 관리, 자료 조사 등.| 팀원
  김영아 | ChatGPT Prompt Engineering | ChatGPT Prompt Engineering, ChatGPT 관련 API 개발 등. | 팀원

### 1-4. Scheduling Info

***Github Issues***와 ***Github Projects***를 통한 세부적인 스케쥴 관리 진행.

- [***Github Issues***](https://github.com/lumirlumir/web-moing.lumir.page/issues)
- [***Github Projects***](https://github.com/users/lumirlumir/projects/2)

개략적인 일정은 아래와 같다.

추진 내용([Milestone](https://github.com/lumirlumir/web-moing.lumir.page/milestones)) | \~3.25 | \~4.15 | \~4.30 | \~5.15 | \~5.31 | \~6.17
--- | :---: | :---: | :---: | :---: | :---: | :---:
[Common_Acquisition of development related knowledge](https://github.com/lumirlumir/web-moing.lumir.page/milestone/3) | O | O | O | O
[Front-End_Design](https://github.com/lumirlumir/web-moing.lumir.page/milestone/2) | | O | O
[Front-End_Implementation](https://github.com/lumirlumir/web-moing.lumir.page/milestone/5) | | | | O | O
[Back-End_ChatGPT](https://github.com/lumirlumir/web-moing.lumir.page/milestone/4) | | | O | O
[Common_Testing and debugging](https://github.com/lumirlumir/web-moing.lumir.page/milestone/6) | | | | | O
[Common_Feedback](https://github.com/lumirlumir/web-moing.lumir.page/milestone/7) | | | | | | O

### 1-5. Meeting Info

***Github Issues***를 통한 팀 활동 내역 및 주간 회의 내역 관리 진행. (`docs/JBNU` 디렉터리 내부의 문서들은 행정 처리를 위해 기존 내용들을 따로 가공하여 처리한 `.hwp` 및 `.pdf` 문서들이다.)

- [***Github Issues***](https://github.com/lumirlumir/web-moing.lumir.page/issues?q=is%3Aissue+label%3AJBNU+)

## 2. Requirements Specification

> 참여 기관의 불참으로 협업이 불가능해져, 산학 연계 프로젝트가 아닌 단순 팀 프로젝트로 변경되었다.

### 2-1. 참여 기관의 제안 내용

개발자 채용 과정에서의 인력을 대체하여 기술 인터뷰를 진행할 수 있는 AI 면접 서비스를 개발한다. 이는 기술 인터뷰 과정에서 AI 면접관을 배치하여 인터뷰를 진행하고, 인터뷰 내용을 기반으로 등급을 채점해주는 서비스를 만드는 것이다. 요구 사항은 아래와 같다.

1. 전문성 검증을 위한 질문 자동 생성. (CS, FE, BE, DB, OOP)
    - ChatGPT API를 활용하여 관련 질문을 생성한다.
    - 질문은 중복되지 않아야 한다.
    - 질문 수는 영역(CS, FE, BE, DB, OOP)별로 설정할 수 있어야 한다.
    - 질문 수(메인 질문/꼬리 질문)를 설정할 수 있어야 한다.
    - 꼬리 질문은 인터뷰이의 답변을 기반으로 연관된 질문이 생성되어야 한다.

1. 인터뷰 진행.
    - 답변 시간을 제한할 수 있어야 한다.
    - 답변은 음성과 텍스트로 제출될 수 있다.

1. 인터뷰 결과.
    - 인터뷰이의 정보, 질문, 질문에 대한 답변, 답변에 대한 등급을 확인할 수 있어야 한다.
    - 답변 내용을 기반으로 미흡, 보통, 우수 등급으로 채점한다.
    - 채용과 관련하여 AI 면접관의 종합의견이 작성되어야 한다.

### 2-2. 과제 배경 및 목적

해외에는 ‘LeetCode-Mock Interview’, ‘Pramp’, ‘Interview Buddy’ 등의 다양한 모의 인터뷰(Mock Interview) 서비스들이 존재한다. 'LeetCode-Mock Interview'와 'Pramp'의 경우에는 코딩 테스트 기반의 실시간 모의 인터뷰를 진행하는 플랫폼이며, 'Interview Buddy'의 경우에는 면접관과 지원자의 1대1 매칭을 통해 실시간 모의 인터뷰를 진행하는 플랫폼이다.

위 플랫폼들은 각각 자신들만의 방법으로 실시간 모의 인터뷰를 지원하지만, 이들은 모두 자연어 처리 AI(ChatGPT 등)를 활용한 대화 기반의 인터뷰 서비스는 아니다. 이러한 서비스를 찾기 위해 다양한 플랫폼들을 조사해 봤지만, 국내ㆍ외 모두 자연어 처리 AI(ChatGPT 등)를 활용한 대화 기반의 인터뷰 서비스는 전무한 상황이다. 그렇다면, 기업에서 이러한 인터뷰 서비스가 필요한 이유는 무엇일까?

IT 기업의 일반적인 채용 절차를 살펴보자. 이는 대체로 ‘서류 - 코딩테스트 - 과제테스트 - 1차면접 - 2차면접’의 순서를 따른다. 인터뷰를 진행할 수 있는 시간과 인력이 한정적이기도 하고, 1차ㆍ2차 면접은 면접관들이 직접 지원자들의 소통 능력 혹은 기술 지식 등에 대해 질문하고 판단하는 형태를 띄기 때문에, 인터뷰 기반의 1차ㆍ2차 면접은 주로 채용 절차의 후반부에 진행된다. 즉, ‘서류 - 코딩테스트 - 과제테스트’란 객관적 지표들로 지원자들을 상당수 추려낸 다음에 이후의 채용 절차를 진행하는 것이다.

그렇기에 만약, 채용 절차에 AI를 이용한 인터뷰 서비스를 도입하여 올바른 성적을 매기고 합격ㆍ불합격 여부를 판단할 수 있게 된다면, 인터뷰를 진행하고 관리 감독하는 인원을 줄일 수 있으며, 채용 절차의 초반부에 더욱 다양한 방식으로 회사의 방향성과 맞는 인재들을 추려낼 수 있게 된다. 채용 간 시간ㆍ인력ㆍ비용을 줄이고, 회사와 방향성이 맞는 올바른 인재들을 추려내 효율적인 인력 배치가 가능하게 된다면, 이는 궁극적으로 회사의 생산성과 영업 이익의 향상을 가져오게 될 것이다.

### 2-3. 기대 효과 및 활용 방안

개발하려는 플랫폼의 이식성, 확장성, 그리고 성능이 보장된다면, 해당 플랫폼은 IT 분야 뿐만 아니라 다양한 기업에서의 채용 과정에서 활용될 수 있다.

국ㆍ내외 플랫폼 중에서 현재 개발하려는 내용과 가장 유사한 기술을 사용하고 있는 해외 웹 플랫폼을 하나 살펴보자. ‘LeetCode’란 해외 웹 플랫폼이 있다. 이는 국내의 ‘프로그래머스’, ‘백준’ 등과 같은 PS(Problem Solving) 문제들을 제공하는 플랫폼이다. 단, 여기에는 하나 큰 차이점이 있는데, ‘LeetCode’는 이미 해외 기업(Google, Apple, Facebook, Microsoft 등)들의 다양한 가상 모의 인터뷰를 제공한다는 것이다. 여기에는 기업에 따른 질문 자동 생성, 답변 시간 제한, 답변에 대한 등급 확인, 면접관의 종합의견 작성 등 우리가 개발하고자 하는 내용과 유사한 일부 기술들이 사용된다.

하지만, 주목해야 할 점은 이들은 모두 자연어 처리 AI(ChatGPT 등)를 활용한 대화 기반의 인터뷰 서비스는 아니라는 것이다. 이들은 기업에서 배포한 질문들을 바탕으로, 답이 정해져 있는 실시간 코딩 테스트 문제들을 생성할 뿐이다. 그렇기에, 이러한 서비스들에 더해 자연어 처리 AI(ChatGPT 등)를 활용한 대화 기반의 인터뷰 서비스를 개발할 경우 국ㆍ내외에서 차별성있는 서비스가 가능할 것으로 예상된다.

단, 이러한 플랫폼을 개발한 뒤 인터뷰 서비스 단독으로 배포하여 사용하는 것은 큰 의미가 없을 것이다. 자연어 처리 기반의 인터뷰 서비스 역시 채용 절차의 전체가 아닌 일부에서만 활용되는 기술이기 때문이다. 해당 기술을 좀 더 보편적이고 확장성 있게 활용하기 위해 국내 플랫폼으로 눈을 돌려보자.

국내의 다양한 IT 기업의 채용 과정에서 활용되는 ‘프로그래머스’라는 플랫폼이 있다. 이는 해외의 'LeetCode'와 같이 PS(Problem Solving)를 위해 사용되는 플랫폼이다. 다양한 기업들이 해당 플랫폼을 이용하여 채용 과정에서의 코딩 테스트를 진행하는데, 이는, 만약에 기업에서 개별적으로 PS플랫폼을 구축하거나, PS 시험을 보기위해 인력을 투입하게 된다면, 상당한 비용 손실이 발생할 것이기 때문이다. ‘바퀴를 다시 발명하지 마라.’라는 말이 있듯이, 기업은 채용 과정에서의 테스트를 위해 새로운 플랫폼을 구축하거나 인력을 투입할 필요 없이, 이미 잘 만들어진 플랫폼을 활용하면 되는 것이다.

그렇기에, ‘ChatGPT를 활용한 인터뷰 서비스’를 이식성 및 확장성있게 개발하여 국내의 ‘프로그래머스’등과 같이 이미 보편적이고 잘 알려진 플랫폼에 해당 기능을 이식할 수 있다면, 개발 면접을 준비하는 취업 준비생들과 채용 절차를 진행하는 기업 모두에게 도움을 줄 수 있을 것이다. 취업 준비생들은 모의 면접을 진행하는 시간ㆍ비용을 아낄 수 있을 것이고, 기업에서는 해당 채용 절차에 소모되는 인력ㆍ시간ㆍ비용을 줄여 기업의 영업 이익 향상을 가져올 수 있을 것이다.

### 2-4. 멘토링 진행 내역

해당 주제를 제시한 참여 기관의 불참으로 기업과의 협업이 불가능해져, 대신에, 네이버에 재직중인 시니어 개발자 두 분과 함께 멘토링을 진행하였다.

#### 2-4-1. Front-End

Front-End 개발은 현재 설계한 방식대로 계속 진행한다면 상당히 좋은 결과가 있을 것이라 하였다. 상황에 맞는 다양한 툴들을 사용하고 있고, 해당 툴들을 사용하는 이유와 사용법들도 잘 숙지하고 있기 때문에, 구현 과정만 잘 진행한다면 큰 문제가 없을 것이라 하였다. 단, 서비스의 성능을 높이기 위해서 캐시 기능을 어떻게 활용할 것인지와 다양한 서비스들을 위해 Browser의 내장 Storage를 활용하는 방법을 고민해보라고 하였다.

#### 2-4-2. Back-End(ChatGPT)

현재 주제로 프로젝트 진행 시, 가장 눈여겨 볼만한 부분은 ChatGPT 관련 부분이라고 하였다. 만약, 해당 프로젝트를 제대로 진행하게 될 경우, 프롬프트 엔지니어링 부분이 프론트엔드 부분에 비해 훨씬 높은 중요도를 갖게 될 것이라 하였다. 만약, 인터뷰이의 답변에 대한 등급을 판단하는 과정에서 어려움을 느낄경우, Back-End에 Database를 도입할 것을 권하였으며, 이를 기반으로 등급을 어떻게 비교ㆍ판단할 것인지 깊이있게 고민해보라고 하였다.

## 3. Design

과제의 설계 및 구현 분야는 크게 3가지로 나눌 수 있다. 첫째는 ‘Web Front-End Development’, 둘째는 ‘ChatGPT Prompt Engineering’, 마지막으로는 ‘Administrative Processing and Data Research’이다. 각각의 내용을 자세히 살펴보자.

### 3-1. Web Front-End Development

‘Web Front-End Development’에서는 기본적으로 인터뷰 서비스를 위한 Web UI를 설계하고, API를 통해 Back-End Server의 역할을 하는 ChatGPT Server와 통신한다. 개발 과정에서의 협업과 일관성을 위한 다양한 도구 및 기술들이 사용된다. 이들은 다음과 같다.

#### 3-1-1. Editor

- VScode

#### 3-1-2. Language

- HTML
- Markdown
- CSS
- SCSS
- JavaScript(ES6)
- JSON
- YAML

#### 3-1-3. Library

- React.js

#### 3-1-4. API

- ChatGPT OpenAI API

#### 3-1-5. Environment

- Node.js (Node, NPM, Dotenv, ...)

#### 3-1-6. Module Bundler

- Webpack

#### 3-1-7. Configuration Management

- Github: 협업 및 형상관리를 위해 사용.

#### 3-1-8. Issues Tracking & Scheduling

- Github Issues/Projects: 개발 중 발생하는 Issues Tracking과 Scheduling을 위해 사용.

#### 3-1-9. CI/CD

- Github Workflows: 배포 및 API Key 관리를 효율적으로 진행하기 위한 CI/CD 도구.

#### 3-1-10. Distribution

- Github Pages: 개발 완료 후, 웹 페이지 배포를 위해 사용.

#### 3-1-11. Conventions

- EditorConfig: Global
- esLint: JS
- Prettier: JS
- markdownlint: MD

#### 3-1-12. Rules

- [Github Commit Rules](https://github.com/lumirlumir/Web_GithubBlog_Data/blob/main/Docs/CSE/Tools/Git/Github/GitCommitMessage/index.md)
- Github Branch Rules: Vincent Driessen의 Git Flow 전략을 일부 따른다. `main`, `develop`, `hotfix`, `feature` 총 4개의 Branch로 분리하여 개발 진행.

#### 3-1-13. Security

- Github Secrets 및 Github Actions를 통한 API Key 관리.
- `JBNU/docs` 디렉터리 내 모든 개별 문서 암호화.

### 3-2. ChatGPT Prompt Engineering

‘ChatGPT Prompt Engineering’에서는 질문에 대한 올바른 답변을 제공하기 위해, 다양한 Data들을 통해 ChatGPT를 학습시킨다. Front-End에서 요청한 JSON 형식을 확인하여 다양한 조건 값에 따른 올바른 응답을 제공해야 한다. 개발을 위해 알아야 할 기술들은 다음과 같다.

- ChatGPT Prompt Engineering
- ChatGPT OpenAI API

### 3-3. Administrative Processing and Data Research

‘Administrative Processing and Data Research’에서는 행정 처리, 재무 관리, 자료 조사 등을 진행한다. 개발 과정에서 필수적인 외적인 요소들을 모두 관리한다.

## 4. Implementation
