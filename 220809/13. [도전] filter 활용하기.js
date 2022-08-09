const arr = [1,2,3,4,5,6,7,8,9,10];

const arr1 = arr.filter((num) => num % 2 === 1);
console.log(arr1);

const arr2 = arr.filter((num) => num > 3 && num < 9);
console.log(arr2);