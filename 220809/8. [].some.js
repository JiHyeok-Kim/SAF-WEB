const datas = [1,2,3,4,5];
console.log(datas.some((data) => data > 4));
// true 반환

console.log(datas.some((data) => data < 0));
// false 반환

//[]some은 조건 중에 충족하는 것이 하나라도 존재한다면 ture를 반환
//충족하는 것이 하나라도 없다면 false를 반환