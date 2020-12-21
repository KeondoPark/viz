## SNU(Start-up Newbies User Guide) 프로젝트

_팀 TGIF, 서울대학교 데이터사이언스 대학원_

팀 TGIF입니다. 이 Github 레포지토리에는 스타트업을 막 시작하려는 예비 창업자 여러분에게 스타트업을 포함한 여러 기업의 운영 현황을 소개해, 보다 준비된 사업을 영위할 수 있는 시각화 자료를 포함하고 있습니다. 아래와 같이 시각화 작품을 구현하기 위한 시스템, 시각화 자료 유형, 자료 접근법 및 스타트업 용어를 소개하도록 하겠습니다.

---

## 0. 팀 TGIF에 대해

팀은 총 5명으로, 조원은 아래와 같습니다. 모두 데이터사이언스학과 소속으로, 특유의 조직력으로 성공적인 프로젝트를 위해 다같이 고군분투하였습니다.

- 손영준
- 백유빈
- 장우석
- 박건도
- 이우철

## 1. 활용 시스템 및 라이브러리

시각화 프로젝트에 아래와 같은 시스템 및 라이브러리를 활용하였습니다.

- d3.js
- python
- geopy
- jquery
- topojson
- bootstrap
- layout.cloud 등

## 2. 시각화 자료 유형

### 전체

전반적으로는 **Scrolly telling** 템플릿으로 핵심 질문사항들을 엮었습니다. 스타트업 뉴비가 시각화 자료를 단지 Scroll을 하고 약간의 Interaction을 하면, 다방면의 유용한 정보를 자연스럽게 체득할 수 있습니다.

### 부분 - Key Questions

앞서말한 Scrolly telling 템플릿에 스타트업 뉴비들이 궁금해할 만한 핵심 질문사항(Key Question)에 대한 시각화 자료를 나열하였습니다. KQ와 시각화 자료 유형을 순서대로 소개하겠습니다.

- KQ1. 유니콘 기업은 어떻게 성장해왔는가?
  - Racing Bar Chart
- KQ2. 투자를 얼마나 받을 수 있을까?
  - Bar Charts
  - Checkbox
  - Opacity
  - Color by Industries
- KQ3. 내 회사의 성장곡선은 어떻게 될까?
  - Area Chart
  - Opacity
  - Color by Industries
- KQ4. 내 분야의 사람을 뽑기 위해서 어디로 리크루팅을 가는게 좋을까?
  - Bar Chart
  - Tooltip
- KQ5. 내 전공으로 이 산업에서 창업을 해도 될까?
  - Pie Chart
- KQ6. 전세계 도시중 어디에 가서 나의 사업을 시작해 볼까?
  - Map Chart
  - Bubble(representating the number of companies located)
- KQ7. 미국의 어떤 주에서 사업을 시작해 볼까?
  - Map Chart
  - Bubble(representating the number of companies located)

## 3. 시각화 자료 접근법
본 git을 clone하시고 간단히 python 파일만 실행하시면 여러분의 로컬 PC에서 시각화 자료를 접근하실 수 있습니다. ($라고 되어있는 부분은 제외하고 터미널에서 실행하세요. $는 단지 해당 줄이 터미널 명령어라는 것을 표시하는 기능만 할 뿐이기 때문입니다):

```
$ cd ~
$ git clone -b mergedBranch --single-branch https://github.com/KeondoPark/viz.git
```

viz폴더에 들어가 아래와 같이 실행파일을 구동하면 됩니다(파이썬 3 필요)
```
$ cd viz
$ python3 server.py
```
server.py가 구동되면 로컬 PC의 웹브라우져 주소창에 http://localhost:8080/ 를 치시거나 본 링크를 클릭하시게 되면 시각화 자료를 접근할 수 있습니다.


## 4. 스타트업 용어 정리
시각화 자료를 보다 유용하게 누리실 수 있도록 하고자 아래와 같이 스타트업 기본 용어를 정리하여 소개해 드립니다. 만약 진정으로 스타트업을 만드실 경우 상당히 많이 듣게 될 용어입니다. 
- 엔젤 투자자(Angel Investor): 초기 단계에 있는 스타트업에게 자본금을 투자하고 조언자로 참여하는 것을 일컫는다.
- 시드 투자(Seed Investment): 시제품(Prototype) 개발까지의 기간동안 운영자금 융통 위해 받는 투자. 창업자, 지인 또는 엔젤 투자자 등이 주로 투자한다.
- 시리즈(Series) A: 시제품(Prototype) 개발부터 본격적인 시장 공략 직전까지의 기간에 받는 투자
- 시리즈(Series) B: 사업확대, 대규모 채용 등 1차 확장을 위한 투자
- 시리즈(Series) C, D, ...: 추가 사업 확대를 위한 투자
IPO(Initial Public Offering): 외부 투자자가 공개적으로 주식을 살 수 있도록 기업이 자사의 주식과 경영 내역을 공개하는 것으로 기업의 주식을 증권시장에 공식적으로 등록하게 된다. 상장이라고도 한다.
- M&A(Merge & Acquisition): 기업의 인수 또는 합병. 예를 들면 대기업이 스타트업의 지분을 인수하는 경우.
- 유니콘(Unicorn): 기업 가치가 10억 달러(약 1.1조)를 넘는 비상장 스타트업을 의미하는 말
- 투자 회수(Exit): 창업 이후 기업의 상장, 대기업 매각 등으로 지분을 가진 투자자 또는 창업자들이 수익을 남기게 되는 것
- 벤처캐피탈(Venture Capital, VC): 자금이 부족한 스타트업에게 무담보 주식투자 형태로 투자하는 기업


## 5. 더 살펴보기
- [논문]()
- [데모 비디오]()