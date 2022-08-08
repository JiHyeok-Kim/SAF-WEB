const a = prompt("새 문자열 입력");
const b = prompt("새 문자열 입력");
const c = prompt("새 문자열 입력");

if(a === b && a === c){
    alert("Very Good");
}
else if(a !== b && a !== c){
    alert("Only One");
}
else{
    alert("Two");
}