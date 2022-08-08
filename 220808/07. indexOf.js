const a = "HELLOWORLDHELLO";

// 문자열.indexOf("찾을 문자열", 검색을 시작할 index값, 생략시 0부터 시작);
// 검색된 문자열의 첫번째 위치 index를 return
const g1 = a.indexOf("HELLO");

console.log(g1);

const g2 = a.indexOf("HELLO", 6);
console.log(g2);

//값을 찾지 못하면 -1을 return
const g3 = a.indexOf("안녕!세상");
console.log(g3);