const nums = [1,2,3,4,5];

const newNums = nums.reduce((acc,cur) => {
  if(cur > 3){
    acc.push(cur);
  }
  return acc;
},[]);
console.log(newNums);