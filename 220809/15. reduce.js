const nums = [1,2,3,4,5];

// 수 더하기
//  const sum = nums.reduce((acc, cur) => {
//    console.log("acc", acc);
//    console.log("cur", cur);
//    return acc + cur;
//  });
//  console.log(sum);

//축약
// const sum = nums.reduce(acc, cur)
// console.log(sum);

// 초기값이 있을 때
//const newNumbs = nums.reduce((acc, cur) => {
//  console.log("acc", acc);
//  console.log("cur", cur);
//  acc.push(cur + 1);
//  return acc;
  // return acc는 newNumbs에 바로 return 되는 것이 아니라
  // reduce(acc,cur)의 acc에 return이 된다.
  // 그리고 최종 값을 newNumbs에 return 한다.
//}, {});
//console.log(newNums);

//응용
// 알고리즘의 DAT와 같다.
const arr = [
  "피카츄", "라이츄",
  "파이리", "꼬부기",
  "피카츄", "파이리"
];

const result = arr.reduce((acc, cur) => {
  if(acc[cur]){
    acc[cur] += 1;
  } else {
    acc[cur] = 1;
  }
  return acc;
}, {});
console.log(result);