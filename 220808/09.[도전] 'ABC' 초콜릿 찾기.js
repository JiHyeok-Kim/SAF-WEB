const str = "ABCABCMCABCABCMCBBQABC";
let a = -1
let cnt = 0;

while(1){
    a = str.indexOf("ABC", ++a);
    if(a === -1) break;
    console.log(a);
    cnt++;
}

console.log(cnt);