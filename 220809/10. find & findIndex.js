const datas = [1,2,3,4,5];

datas.find((data) => data > 4);
// 5가 출력된다.

datas.find((data) => data > 5);
// undefined(값이 없을 경우)

console.log(datas.findIndex((data) => data > 4));
// 4 return
console.log(datas.findIndex((data) => data > 5));
// -1 return (없는 경우)