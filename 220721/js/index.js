// 토글 버튼을 클릭시
// 이벤트 발생
const toggleButton = document.querySelector(".toggle-button");
const body = document.querySelector("body");
const headderNav = document.querySelector(".headernav");
const bookmarkWrapper = document.querySelector(".bookmark-wrapper");
const texts = document.querySelector(".text");

toggleButton.addEventListener('click', function(){
    console.log("다크모드 버튼이 눌려짐");
    // 버튼클릭시마다 classList의 toggle로 class추가
    toggleButton.textContent = "다크모드"
    toggleButton.classList.toggle("toggle-button-darkmode");
    body.classList.toggle("body-background-darkmode")
    bookmarkWrapper.classList.toggle("text-darkmode")
    for (let i = 0; i < texts.lenght; i++){
        texts[i].classList.toggle("text-darkmode");
    }

    // classList의 contains

    if(toggleButton.classList.contains("toggle-button-darkmode")){
        toggleButton.textContent = "일반 모드";
    }
})

//구글 이동
const searchInput = document.querySelector(".serch-input");

searchInput.addEventListener("keyup", function(e){
    //확인 후 주석처리 console.log(e);
    // e.code === "Enter"일 때 특정 위치로 이동시킨다.
    if(e.code === "Enter"){
        console.log("가즈아ㅏㅏㅏㅏㅏ")
    }

    //유효성 검사
    // 빈값인 경우 검색어를 입력하지 않았음을 출력해주기
    if(!e.target.value){
        alert("검색어를 입력하지 않았습니다!");
        return;
    }
    //https://www.google.com/search?q=내용에 따라 검색어가 검색된다.
    const target = "https://www.google.com/search?q="
    //이동하는 방법
    //현재창에서 이동
    // location.href
    // 확인 후 주석처리 location.href = "https://www.google.com/search?q=" + e.target.value
    //새탭에서 이동
    //window.open
    window.open(target + e.target.value);
})