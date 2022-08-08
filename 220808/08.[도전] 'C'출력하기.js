const str = "KFCOCOBBQMINMINC";
let a = -1

const array = [];

console.log(str.indexOf("C"));

while(1){
    a = str.indexOf("C", a+1);
    if(a === -1) break;
    array.push(a);
} 

console.log(array);