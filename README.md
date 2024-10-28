# javascript-racingcar-precourse
# 자동차 경주

## 과제 진행 요구 사항
미션은 자동차 경주 저장소를 포크하고 클론하는 것으로 시작한다.
기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
AngularJS Git Commit Message Conventions을 참고해 커밋 메시지를 작성한다.
자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

# 기능 요구 사항

- [x] 자동차 이름, 횟수 입력 받기
  - [x] ',' 기준으로 이름 입력 (5자 이하)
  - [x] 자연수 숫자 입력받기
  - [x] 잘못된 값 입력시 에러처리
  - [x] 유효한 숫자 아닌 경우 에러처리
- [x] 자동차 경주
  - [x] 전진 기능 구현
  - [x] 결과 출력 기능 구현
- [x] 최종 우승자 출력
  - [x] 공동 우승 처리
- [x] ERROR 출력

주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.