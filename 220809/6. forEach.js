const nums = [3, 5, 4, 2];
nums.forEach((num) => console.log(num));
nums.map((num) => console.log(num));
// forEach 단순 순회하는 메서드
// array.forEach(); array만 사용가능하다.
// 참고로 querySelectorAll은 array가 아니기때문에 사용 불가능
// forEach은 return값이 없다. 
// map은 forEach같은 단순 순회랑 다르게 return이 존재하기 때문에 새로운 배열을 만든다.

const newNums = nums.map((num) => num + 1);
// map을 통해 newNums라는 새로운 배열을 만들었다.
console.log(newNums);

const sampleFunc = (num) => console.log(num);

const numss = [3, 5, 4, 2];
numss.forEach((num) => console.log(num));
numss.forEach(sampleFunc);
// 함수가 길어지면 함수를 직접 넣기보단 변수로 저장한 함수를 넣으면 된다.