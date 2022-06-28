//scope...
/*
프로그래밍에서의 scope란?
  변수또는 함수의 유효한 범위.

  블럭이 아무것도 없는 쌩 코드 판 => 전역 스코프 (모든 언어가 다 가지고 있음.)
  아래와 같이 함수 또는 조건문과 같이 {}요걸로 감싸져 있으면 => 지역 스코프(2가지 종류가 존재한다.)

  특정한 스코프에서 변수 또는 값을 원할 때는 현재 스코프 => 상위스코프로 찾아가는 방식으로 진행된다.

  var을 쓰지 않는 이유가 한번 더 나온다.
  => var은 본인의 스코프에서 동일한 식별자로 이미 선언이 되어도 오류를 발생시키지 않는다.

  1. 함수 레벨 스코프
    => 난 무조건, 함수만 지역스코프 또는 하나의 스코프로 인정하겠다.
    => var이 함수 레벨 스코프
  2. 블록 레벨 스코프
    => {} 요 블록 기호를 쓰는 for, while, if else... 이런 것들을 하나의 스코프로 인정하겠다.
    => let, const 가 블록 레벨 스코프
*/
let 수환 = 20; //전역 변수 수환
function hello() {
  let 수환 = 10; //function hello의 지역변수
  var 엄 = 10;
  var 엄 = 20;
  console.log(수환);
}

//hello();

//if문도 하나의 스코프!
if (true) {
  let 수환 = 11;
}
var i = 200;
for (var i = 0; i < 10; i++) {
  //console.log(i);
}
//console.log(i);
//let은 여기서 출력이 안됨. for은 하나의 지역스코프이기 때문에.
//var은 for을 하나의 스코프라고 생각 안함. 그래서 10이 나옴.

/*
js는 렉시컬 스코프 방식을 사용한다.

일단은... 본인이 원하는걸 찾는 스코프 방식은 크게 두가지로 또 나뉜다.
1. 렉시컬 스코프 => js => 선언 당시에 위에 있는 스코프를 찾음.
2. 동적 스코프 => 다른 언어들. => 실행 과정 중에서 위에 있는 스코프를 찾는 것.
*/
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1

/*
스코프 체인
*/
let val1 = 10;
function a() {
  function b() {
    function c() {
      console.log(val1);
    }
  }
}