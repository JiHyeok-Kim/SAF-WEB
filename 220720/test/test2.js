// 배열은 기본적으로 같은 type끼리 묶는 것이 정석이다
// type이 달라도 배열은 가능하지만 권장하지 않는다
// 문제는 각 index의 정보가 어떤 정보인지를 알 수가 없다. 따라서 우리는 객체를 사용해야한다.
const sample = [
  "이자룡",
  "싸피강사",
  true
]

//객체(object)는 키(key)와 값(value)으로 이루어진 프로퍼티(property, 속성)의 모음이다.
const iinfo = {
  userName: "이자룡",
  job : "싸피강사",
  isMarriged: true,
};

// value 값에는 어떤 값, 심지어 함수가 들어가도 상관없다.
// 이 개념을 모두 이해했다면, console.log는 단순히 print의 기능을 수행하는 것이 아니라
// console.log는 console이라는 객체안에 log라는 메서드가 있는 형태다.
const family = ["아빠", "엄마", "실비"]

const info = {
  userName: "이자룡",
  job : "싸피강사",
  isMarriged: true,
  myStack: {
      fronted: "vue.js",
     backend: "node.js",
},
  family: family,
add: function (a, b) {
     return a +b;
},
}

console.log(info.userName);
console.log(info.family[1]);
console.log(info.add(3, 4));
console.log(info.myStack);

// === 를 쓰는 이유?
// 이때 == 는 type이 달라도 값만 같다면 true가 된다.
// !== , 단 비교연산은 >= , <= 기존의 다른 언어의 방식처럼 사용한다.
const a = 1;
const b = "1";
console.log(a == b);

// array 구현
const arr = [];

// const는 상수변수였지만 배열과 객체는 수정과 추가, 제거도 가능하다.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// 단 배열 자체를 다시 새로 선언하는건 안된다!!
const arr = [1, 2, 3];
arr = [];

//문자열을 붙힐때는 그냥 덧셈을 사용해도 되는데 배열은 concat을 사용해야한다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const result1 = arr1 + arr2;
console.log(result1);
const result2 = arr1.concat(arr2)
console.log(result2);