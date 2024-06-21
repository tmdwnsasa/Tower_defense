# Tower_defense

### 타워 디펜스 AWS 배포

- [타워 디펜스 서버 링크(추가 필요)]()

### 프로젝트 개요

- 프로젝트 명 : 타워 디펜스 게임 프로젝트
- 소개
    - 내용 : 타워를 구입하거나 강화하여 몰려오는 적들로부터 기지를 지키는 게임
    - 제작 기간 : 2024.6.17.(월) ~ 2024.6.21.(금)

![image](https://github.com/tmdwnsasa/Tower_defense/assets/84895591/789d94ea-aca0-4a1d-94ef-0aec22cad385)

### 프로젝트 설계 및 구현

- 회원가입 로그인 기능
    - [x]  회원가입 (API)
    - [x]  로그인 (API)

- 유저 별 게임 데이터 관리
    - [x]  공통 데이터 파일 생성
    - [x]  유저 데이터 관리

- 이벤트 구현
    - [x]  커넥션 성공 이벤트
    - [x]  상태 동기화 이벤트
        - [x]  기지 체력
        - [x]  유저 골드
        - [x]  타워 정보
        - [x]  몬스터 레벨
        - [x]  유저 점수
        - [x]  스테이지 정보
    - [x]  게임 시작 이벤트
    - [x]  게임 종료 이벤트
    - [x]  타워 추가 이벤트
    - [x]  타워 강화 이벤트
    - [x]  타워 환불 이벤트
    - [x]  적 처치 이벤트
    - [x]  기지 체력 감소 이벤트
    - [x]  유저 별 최고 기록 확인 이벤트
    - [x]  점수마다 스테이지 이벤트(2000점 기준)
    - [x]  황금 고블린 출현 이벤트(2000점마다)

### API 명세서

- [API 명세서 링크](https://www.notion.so/teamsparta/24658d6f5c9247688a31b0aac1332ad2?v=c4bd7a1ddd674b41b1c0af8713bb1286&pvs=4)

![image](https://github.com/tmdwnsasa/Tower_defense/assets/84895591/489bbc94-5955-4ae1-af0f-3c402d0da6f3)

### 패킷 명세서

- 공통 패킷

    |필드 명 | 타입 | 설명 |
    |-------|------|-------|
    |handlerID|int|요청을 처리할 서버 핸들러의 ID|
    |userId|int|요청을 보내는 유저의 ID|
    |clientVersion|string|현재 클라이언트 버전 (”1.0.0”) (고정)|
    |payload|JSON|요청 내용|
  
<details>
<summary><h3>각 핸들러 payload</h3></summary>

- **커넥션 성공 시**
  
    |필드 명 | 타입 | 설명 |
    |-------|------|-------|
    |id|string|검증 받은 유저의 ID|
    |highScore|int|유저의 최고 기록|

- **gameStart(handlerId: 2)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | timestamp | Date | 게임 시작 시간 |

- **gameEnd(handlerId: 3)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | timestamp | Date | 게임 종료 시간 |
    | score | int | 게임 결과 점수 |

- **moveStageHandler(handlerId: 11)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | currentStage | int | 현재 스테이지 |
    | targetStage | int | 다음 스테이지 |

- **addMonsterKillScore(handlerId: 24)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | currentScore | int | 현재 게임 점수 |
    | score | int | 추가할 킬 점수 |

- **applyChangedGold(handlerId: 25)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | currentGold | int | 현재 골드 |
    | gold | int | 사용/획득한 골드 |

- **addMonsterKillCount(handlerId: 31)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | monsterLevel | int | 처치한 몬스터 레벨 |

- **spawnGoldenGoblin(handlerId: 32)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | - | - | - |
    | - | - | - |

- **killGoldenGoblin(handlerId: 33)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | monsterNumber | int | 몬스터 고유번호 |

- **handleTowerEvent(42~45)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | x | int | 타워의 x좌표 |
    | y | int | 타워의 y좌표 |
    | eventId | int | 이벤트 id |

- **damageBase(handlerId: 51)**

    | 필드 명 | 타입 | 설명 |
    | --- | --- | --- |
    | currHp | int | 기지의 현재 체력 |

</details>

### ERD 

![image](https://github.com/tmdwnsasa/Tower_defense/assets/84895591/9bc31420-e345-43c2-9cb5-204277bcf9aa)


### 와이어프레임

![image](https://github.com/tmdwnsasa/Tower_defense/assets/84895591/e1e67e35-6f4a-410d-9630-cdd371c78423)


### BackEnd Skills

![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![javascript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![node.js](https://img.shields.io/badge/node.js-5FA04E?style=for-the-badge&logo=node.js&logoColor=white)
![.env](https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=.env&logoColor=black)
![amazonrds](https://img.shields.io/badge/amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)
![amazonec2](https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
![git](https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white)
![github](https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white)

### 폴더 구조

```markdown

node_modules/

prisma/
└── schema.prisma

src/
├── handlers/
│ ├── base.handler.js
│ ├── game.handler.js
│ ├── gold.handler.js
│ ├── handlerMapping.js
│ ├── helper.js
│ ├── monster.handler.js
│ ├── register.handler.js
│ ├── score.handler.js
│ ├── stage.handler.js
│ └── tower.handler.js
├── init/
│ ├── assets.js
│ └── socket.js
├── models/
│ ├── base.model.js
│ ├── gold.model.js
│ ├── monster.model.js
│ ├── score.model.js
│ ├── stage.model.js
│ ├── tower.model.js
│ └── user.model.js
├── routes/
│ └── user.router.js
├── utils/
│ ├── prisma/
│ │ └── index.js
│ └── config.js
├── app.js
└── constants.js

tower_defense_client/
├── assets/
│ ├── init.json
│ ├── monster_unlock.json
│ ├── monster.json
│ └── stage.json
├── images/
│ ├── base.png
│ ├── bg.webp
│ ├── favicon.ico
│ ├── monster1.png
│ ├── monster2.png
│ ├── monster3.png
│ ├── monster4.png
│ ├── monster5.png
│ ├── monster6.png
│ ├── monster111.png
│ ├── path.png
│ └── tower.png
├── src/
│ ├── base.js
│ ├── Constants.js
│ ├── game.js
│ ├── monster.js
│ ├── Socket.js
│ ├── tower.js
│ └── user.js
├── index.html
├── login.html
└── register.html

.env
.gitignore
.prettierrc
package-lock.json
package.json
README.md
```

### 게임 방법

- 회원가입 및 로그인

- 게임 시작
  - 로그인 후 게임 플레이 버튼을 통해 게임을 시작할 수 있다.
    
- 게임 종료
  - 기지의 체력이 0이 되면 게임이 종료된다.
    
- 기지
  - 초기 체력 100
  - 적이 살아서 기지와 충돌하는 경우 해당 적의 공격력만큼 기지의 체력이 감소한다.
  - 기지의 체력이 0이 되면 게임이 종료된다.
  
- 타워
  - 초기 타워
    - 게임 시작 시 초기 타워 3개가 랜덤으로 배치된다.
  - 타워 구입
    - 골드를 소모해 타워를 구입할 수 있다.
    - 구입한 타워는 랜덤으로 배치된다.
    - 구입 비용 : 100 골드
  - 타워 강화
    - 골드를 소모해 타워를 강화할 수 있다.
    - 타워 업그레이드 버튼을 누르고 원하는 타워를 클릭하여 강화할 수 있다.
    - 강화된 타워는 더 강한 데미지와 더 넓은 범위를 지닌다.
    - 강화 비용 : 2000 골드
  - 타워 판매
    - 타워를 판매하여 골드를 획득할 수 있다.
    - 판매를 원하는 타워를 클릭하여 타워를 판매할 수 있다.
    - 판매 비용 : 100 골드 (강화된 타워의 경우 2100 골드)

- 적
  - 적은 일정한 주기로 생성되어 기지를 향해 움직인다.
  - 적은 타워의 공격을 받아 체력이 0이 되면 사망한다.
  - 적이 살아서 기지와 충돌하는 경우 해당 적의 공격력만큼 기지의 체력이 감소한다.
  - 적의 종류는 여러가지이며 각각의 체력과 속도가 다르다.
  - 적은 스테이지가 높아질 수록 체력이 늘어난다.
  - 스테이지가 높아질 때마다 처치 시 골드를 획득할 수 있는 특별한 적이 생성된다.
 
- 스테이지
  - 스테이지는 점수를 기반으로 높아진다.
  - 2000점을 획득할 때마다 스테이지가 높아진다.
  - 스테이지가 높아질 때마다 사용자는 1000 골드를 획득한다.
  - 스테이지가 높아질 때마다 적의 체력이 늘어난다.
  - 스테이지가 높아질 때마다 처치 시 골드를 획득할 수 있는 특별한 적이 생성된다.
  - 스테이지에 따라 출현하는 적의 종류가 달라진다.
 
- 점수
  - 적을 처치할 때마다 100점을 획득한다.
  - 게임이 끝날 때마다 해당 게임의 점수를 기록한다.
  - 최고 기록을 통해 해당 사용자의 최고 점수를 확인할 수 있다.

