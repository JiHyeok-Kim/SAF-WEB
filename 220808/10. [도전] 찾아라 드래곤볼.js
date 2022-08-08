const str = "BTSMINBTSMINBTSKKOPSM";
let a = -1
let cnt = 0;
SM
while(1){
    a = str.indexOf("ABC", ++a);
    if(a === -1) break;
    console.log(a);
    cnt++;
}

console.log(cnt);