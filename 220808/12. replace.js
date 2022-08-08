// 문자열.reaplace("찾은 문자열", "대체할 문자열");

const str = "BBQBbQMINBbQ";

const result = str.replace("BBQBbQMINBbQ", "ABC");
console.log(result);

// 상세 조건을 부여할 때 정규표현식
// / 문자 / flag형
// flage 중 g 플래그가 붙으면 패턴과 일치하는 모든 것을 찾는다.
// g가 없는 경우는 맨 처음 부분만 변경
// i가 붙으면 대소문자 없이 검색

const result1 = str.replace(/BQ/g, "HC");
console.log(result1); //BHCBbQMINBbQ

const result2 = str.replace(/BQ/gi, "HC");
console.log(result2);