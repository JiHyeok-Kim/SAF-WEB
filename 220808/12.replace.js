// 문자열.replace("찾은 문자열", "대체할 문자열");

const str = "BTS BTS JONY bts BTS";

const result1 = str.replace("BTS", "PSY");
//상세 조건은 정규표현식을 이용할 수 있다.
//예시 "//" 슬래시 안에 /문자/ flag형 
// flag 중 g플래그가 붙으면 패턴과 일치하는 모든 것을 찾는다.
//g가 없는 경우 맨 처음 부분만 변경
//i가 붙으면 대소문자 없이 검색

const result2 = str.replace(/BTS/g, "PSY");
const result3 = str.replace(/BTS/gi, "PSY");

console.log(result1)
console.log(result2);
console.log(result3);