console.log(ssafy)
var ssafy = 19;

console.log("hi jh");

alert("Hi");

const a = 1;
console.log(a);

//언어학적으로 잘못됐으나 출력이 가능
var a = 1;
var a = 2;
console.log(a);

//언어학적으로 잘못됐으나 출력이 가능
a = 1;
console.log(a);

//Identifier 'a' has already been declared
const a = 1;
const a = 2;

//Assignment to constant variable.
at <anonymous>:2:2
const a=1;
a=3;

//a is not defined at <anonymous>:6:13
function hello(){
  var a = 5;
}

hello();
console.log(a);

//언어학적으로 잘못됐으나 출력이 가능
// 지역변수와 전역변수는 기본적으로 구분해주지만 블록의 경우 블록 여부와 상관없이 출력은 가능하다
{
  var a = 5;
}

console.log(a);

// a is not defined at <anonymous>:5:13
// const에서는 이 점이 개선되었다.
{
  const a = 10;
}

console.log(a);

// number
console.log(typeof(1))
console.log(typeof(-1))
console.log(typeof(-3.14))
// string
console.log(typeof("1"))
console.log(typeof("a"))
console.log(typeof("랄랄라"))
// boolean
console.log(typeof(true))
// string
console.log(typeof("true"))


const a = [1, 2, 3, 4]
console.log(a[1]);
//(3) 배열 a 크기 [1, 2, 3] a의 배열
console.log(a)

//함수 선언 decalre
function sampleFunc(){
  console.log("랄랄라")
}
//함수 실행
sampleFunc();

//함수 실행
sampleFunc();
//함수 선언 decalre
function sampleFunc(){
  console.log("랄랄라")
}

// call by reference 주소가 넘어갔기때문에 지역 함수 임에도 적용
function sampleFunc(){
  a.push(4);
}
const a = [1, 2, 3];
sampleFunc(a);
console.log(a);

// 올바른 습관
const a = [1, 2, 3];

function sampleFunc(){
  a.push(4);
}

sampleFunc();
console.log(a);

//이 함수의 기능 a+b를 return해준다.
// return은 내보낸다의 개념!
const a = 1;
const b = 2 ;

function sampleFunc(a, b){
  return a+b;
}

const result = sampleFunc(a, b);
console.log(result);

// 함수를 변수처럼 사용 가능하다.
// 그래서 함수  parameter로 함수가 들어갈 수 있다.
console.log(sampleFunc(a, b))

const sampleFunc = function(){
    console.log("랄라");
};
sampleFunc();