const a = "HELLOWORLDHELLO";

// 문자열.indexOf("찾을 문자열", 
// 검색을 시작할 index값, 생략시 0부터 시작);)
// 검색된 문자열의 첫번째 위치 index를 리턴

const g1 = a.indexOf("HELLO");
console.log(g1);

const g2 = a.indexOf("HELLO", 6);
console.log(g2);

const g3 = a.indexOf("안녕!세상");
console.log(g3);
//못찾을 경우 -1값을 return 