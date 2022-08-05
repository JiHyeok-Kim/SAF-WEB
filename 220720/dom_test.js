//긁어오기
//

//가장 처음 것만 바꿀 수 있다.
// document.querySelector(".lalala").textContent="ㅎㅎ";

/*const lalalas = document.querySelectorAll(".lalala");
for (let  i = 0; i < lalalas.length ; i++)
{
lalalas[i].textContent = "yes";
}*/
// console.log(lalals[0].textContent = "yes");
// console.log(lalals[1].textContent = "yes");
// console.log(lalals[2].textContent = "yes");

//Event 작동 방법
// 대표적인 예가 click이지만 수많은 Event가 존재하므로
// 첫 parameter 에는 원하는 Event를 입력하고 두번째 parameter에는 원하는 함수, 동작을 입력한다.
/*function showAlert(){
  alert("야호");
}*/ 
//이렇게 쓰지 않고 한줄로 퉁친다.

/*여기서 묶음
const sampleBtn = document.querySelector(".sample-btn");

//sampleBtn.addEventListener("click", showAlert);
sampleBtn.addEventListener("click", function(){alert("안뇽~")})
//button이 아니라 div라도 작동한다!
//parameter에 입력되는 함수 = 콜백함수!

// tag를 만들었다.
const btn = document.createElement("button2");
// tag에 붙일 text를 만들었다. 직접 text를 입력하면 에러가 뜬다.
const txt = document.createTextNode("민코월드");
// 속성 class를 추가하였다. 이런 방식으로 추가가 가능하다.
btn.setAttribute("class", "sample-btn2");
console.log(txt);

//배열 arrey에서의 push랑은 다른 함수이다.
btn.append(txt);
console.log(btn);

document.querySelector("body").append(btn);
여기서 묶음*/

//연습 for를 이용하여 5개의 버튼을 추가한다.
const btns = [];

for (let i = 0; i <5 ; i++)
{
btns.push(document.createElement("button3"));
}

for (let i = 0; i<5; i++){
  btns[i].setAttribute("class", "sample-button-" + i);
  const txt = document.createTextNode("버튼" + i);
  btns[i].append(txt);
  document.querySelector("body").append(btns[i])
}  

