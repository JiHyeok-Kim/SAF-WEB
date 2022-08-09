function addNumFunc(n, m){
  return n + m;
}

const addNumArrow = (n, m) => {
  return n + m;
};

const addNumArrow1 = (n, m) => n + m;
// 한줄이라면 중괄호 생략 가능
// return도 생략 가능

// const addNumArrow 가 없어도 arrowfunction 자체가 이미 함수이기 때문에
// 홀로 기능한다. 따라서 
//(n, m) => {
//  return n + m;
//};을 독립적으로 존재할 수 있기때문에 콜백함수로 사용 가능하다.

console.log(addNumFunc(1,2));
console.log(addNumArrow(1,2));

// 무명함수 자체가 함수를 한번쓰고 끝내겠다는 의미가 강하다.
// 이렇게 변수사용을 최소한으로 하고 모든 것을 함수로만 프로그래밍 하려는 것을
// 함수형 프로그래밍이라고 한다.
// 예시;

const adder = (x) => (y) => x + y;
add5 = adder(5);
console.log(add5(1));

// 이러한 기법을 클로저라고 부른다.
// 함수로 함수를 만든다.