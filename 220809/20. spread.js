// 객체 spread

const square = {
  width: 200,
  height: 200,
}

const colorSquare = {
  ...square,
  color: 'red'
}
//객체와 배열을 풀어버린다.
console.log(colorSquare)

//배열 spread

const catTypeAnimals = ["고양이", "호랑이"];
const dogTypeAnimals = ["개", "늑대"];

const allTypeAnimals = [...catTypeAnimals, ...dogTypeAnimals];

console.log(allTypeAnimals);