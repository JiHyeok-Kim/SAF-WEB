// 객체 리터링
const ssafy = {
    name: "임베디드",
    study: function(){
        console.log("임베디드 공부하기")
    }
}

//생성자방식
const ssafy1 = new Object();
ssafy1.nmae = "임베디드";
ssafy1.study = function(){
    console.log("임베디드 공부하기")
}

console.log(ssafy1);