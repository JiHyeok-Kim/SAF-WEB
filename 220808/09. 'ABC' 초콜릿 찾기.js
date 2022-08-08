const string = "ABCABCMCABCABCMCBBQABC";

//
let a = -1;
// 갯수
let cnt = 0;

while(1){
    a = stirng.indexOf("ABC", ++a);
    //확인 console.log(a);
    if(a === -1) break;
    cnt++;
}

console.log(cnt);