setTimeout(() => {
  console.log("hi");
}, 2000);

// 특정 조건이 충족됐을때만 실행이 되려면 그 전까지 함수가 저장이 되어야한다.
// 따라서 우리는 함수를 저장할 필요가 있다
// 그렇기 때문에 콜백함수가 필요하다.

const sayHi = () => "Hi";

sampleFunc(sayHi());
//sayHi () 소괄호를 쓰면 함수의 return 값을 넣는다는 의미이다
sampleFunc("Hi");

sampleFunc(sayHi);
// 소괄호가 빠졌기때문에 함수자체를 넣었다는 의미이다.

const func = () => console.log("Hi");

setTimeout(func, 3000);

setTimeout(() => console.log("Hi"), 3000);

//둘은 같은 결과를 만들지만, 위는 func를 다시 재사용하기 위해서 이름을 부여한 것이다.
// 즉, 아래 식은 한번쓰고 버릴려는 의미이다.