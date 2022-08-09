// 객체에서 rest

const chicken = {
  type: "양념",
  drumsticks: 2,
  wing: 2,
};

const{type, ...another} = chicken;
console.log(type);
console.log(another);
// 이때 another는 객체(Object)로 모인다.

// 배열에서 rest

const numberArray = [0,1,2,3,4,5,6];
const [one, two, ...another2] = numberArray;

console.log(one);
console.log(two);
console.log(another2);