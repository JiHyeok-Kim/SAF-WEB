const datas = [1,2,3,4,5];
console.log(datas.every((data) => data > 0));
// true반환

console.log(datas.every((data) => data > 3));
// flase반환

// 하나라도 조건을 충족시키지 못하면 false를 반환