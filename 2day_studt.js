/*
java => javascript

변수의 선언
 - var, let, const
 - 저거는 타입이 아니다. 변수를 선언한다는 키워드. 타입은 자동으로 지정된다.
 */

//요런 여러가지 타입이 있다.
let number = "아무거나";
let string = 123; //이름은 string인데 number 타입으로 자동 지정...

//undefined vs null
let val = undefined; //보통 시스템이 자동으로 넣어줌
let val1 = null; // 사용자가 임의로 넣어줌.

let val2; // 아무것도 안넣어주면 undefined가 나온다.
//console.log(val2);

//const
const val3 = 1234; //값에 접근해서 바꾸는 것.
const arr = [1, 2, 3, 4]; //주소를 통해서 바꾸는건 괜찮음.
arr[1] = 10;

//파이썬에 딕셔너리가, js에서는 object라고 부른다.
const obj = {
  수환: 25,
  동찬: 19,
  채원: 18,
};
obj["수환"] = 100;

//for, while
/*
변수명은 아무거나 해도 됨.

for 쓰는 법
for(let start = 시작값; start < 끝값; start++)

while 쓰는 법
let s = 0;
while(s < 원하는 범위)

*/

for (let i = 0; i < arr.length; i++) {
  //console.log(arr[i]);
}

let s = 0;
//while을 무한반복 하고 싶으면 1, true등의 것들을 적으면 된다. 끝내고 싶으면 당연히 break;
while (s < arr.length) {
  //console.log(s);
  s++; //s를 하나씩 더함. 위의 i++와 비슷함.
}

//map =>   쓰는 방식 :   (배열이나 object).map((val, index ,arr)=> {원하는 명령어})
// map의 경우, 첫번째 매개변수는 값, 두 번째 매개변수는 인덱스가 나온다.
// 원하는 명령어에서 특정한 값을 return 할 경우 새로운 배열이 만들어진다.
// 익명 함수 => 즉각적으로 일회용인 함수가 만들어 진 것임.
const arr1 = arr.map(function (val, i) {
  return val + 10;
});
console.log(arr1);

//javascript 에서 함수 만드는 법

// 1. function 키워드를 이용해서 만든다. (함수 선언문)
function hello(name, age) {
  console.log("hello world!");
  // `` => 백틱 , esc 밑에 있음.
  // `~~~~${원하는변수}~~~` 가 가능함.
  // 변수와 문자열의 조합을 섞어 쓸 때 꼭 활용!
  console.log(`안녕하세요 ${name}님, 나이가 ${age}군요`);
}

//hello("김수환", "오십살");

//2. arrow function 방식으로 만든다. (살짝 최신판임 es6)
// 앞에 const라는 키워드를 써서 만든다.
const hello1 = (name, age) => {
  console.log(`안녕하세요 ${name}님, 나이가 ${age}군요`);
};

//3. 함수 표현식으로 만든다.
// 함수를 선언한다기 보다는 const hello2라는 변수에 함수를 넣어주는 느낌임.
const hello2 = function (name, age) {
  console.log(`안녕하세요 ${name}님, 나이가 ${age}군요`);
};

//typeof를 쓰면 변수 또는 함수나 배열의 타입을 알 수 있다.
console.log(typeof arr); // Array의 경우 타입이 object임.
console.log(typeof hello);
console.log(typeof s);