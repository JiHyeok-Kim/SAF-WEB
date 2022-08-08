const a = "ABCMINMIN";
const b = "BBQCOCO";

const c = a + b;

const result = [];

for(let i = c.length - 1; i >= 0; i--){
    // if(i%2 === 0){
    //    result.push(c[i]);
    //}
    if(i % 2 === 1) continue;
    result.push(c[i]);
}

alert(result);