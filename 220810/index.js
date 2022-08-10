const cardArray = [
  {
    name: "각키",
    img: "./img/각키.jpg",
    id: null,
    done: false,
  },
  {
    name: "각키",
    img: "./img/각키.jpg",
    id: null,
    done: false,
  },
  {
    name: "김다미",
    img: "./img/김다미.jpg",
    id: null,
    done: false,
  },
  {
    name: "김다미",
    img: "./img/김다미.jpg",
    id: null,
    done: false,
  },
  {
    name: "윈터",
    img: "./img/윈터.jpg",
    id: null,
    done: false,
  },
  {
    name: "윈터",
    img: "./img/윈터.jpg",
    id: null,
    done: false,
  },
  {
    name: "웬디",
    img: "./img/웬디.jpg",
    id: null,
    done: false,
  },
  {
    name: "웬디",
    img: "./img/웬디.jpg",
    id: null,
    done: false,
  },
  {
    name: "지수",
    img: "./img/지수.jpg",
    id: null,
    done: false,
  },
  {
    name: "지수",
    img: "./img/지수.jpg",
    id: null,
    done: false,
  },
  {
    name: "카리나",
    img: "./img/카리나.jpg",
    id: null,
    done: false,
  },
  {
    name: "카리나",
    img: "./img/카리나.jpg",
    id: null,
    done: false,
  },
];

const gameDOM = [];

const getGameDOM = () => {
  const rows = document.querySelectorAll(".container .row");
  //확인 완료 console.log(rows);
  for (let i = 0; i < rows.length; i++) {
    gameDOM[i] = rows[i].querySelectorAll(".column");
    //gameDOM 배열에 저장을 해서 일일히 필요할때마다 querySelector로 가져올 필요 없이
    //gameDOM 만으로 필요할 때 마다 꺼내 쓸 수 있게 활용한다.
  }
  //확인 완료 console.log(gameDOM);
  //console.log("getGameDOM 함수 실행");
};

const setIDtoCardArray = () => {
  cardArray[0].id = "0-0";
  cardArray[1].id = "0-1";
  cardArray[2].id = "0-2";
  cardArray[3].id = "0-3";
  cardArray[4].id = "1-0";
  cardArray[5].id = "1-1";
  cardArray[6].id = "1-2";
  cardArray[7].id = "1-3";
  cardArray[8].id = "2-0";
  cardArray[9].id = "2-1";
  cardArray[10].id = "2-2";
  cardArray[11].id = "2-3";
};

let clickFirst = -1;
let clickSecond = -1;
let clickCount = 0;

// 3 x 4 배열에 물음표 이미지 삽입하기
const createBoard = () => {
  for (let i = 0; i < gameDOM.length; i++) {
    for (let j = 0; j < gameDOM[i].length; j++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./img/포토카드 뒷면.jpg");
      gameDOM[i][j].appendChild(card);
    }
  }
};

const setClickHistory = (location) => {
  if (clickFirst === -1) {
    clickFirst = location;
  } else {
    clickSecond = location;
  }
};

const backFlip = () => {
  const parsedIdFirst = cardArray[clickFirst].id.split("-");
  const parsedIdSecond = cardArray[clickSecond].id.split("-");
  setTimeout(() => {
    gameDOM[parsedIdFirst[0]][parsedIdFirst[1]].querySelector("img").src ="./img/포토카드 뒷면.jpg";
    gameDOM[parsedIdSecond[0]][parsedIdSecond[1]].querySelector("img").src ="./img/포토카드 뒷면.jpg";
  }, 500);
};

const isCorrect = () => {
  if (cardArray[clickFirst].name === cardArray[clickSecond].name) {
    cardArray[clickFirst].done = true;
    cardArray[clickSecond].done = true;
  } else {
    backFlip();
  }
};

// 클릭했을 때 true여야 출력
const flip = (location) => {
  if (!cardArray[location].done) {
    setClickHistory(location);

    const parsedId = cardArray[location].id.split("-");
    gameDOM[parsedId[0]][parsedId[1]].querySelector("img").src = cardArray[location].img;

    clickCount++;
    if (clickCount === 2) {
      clickCount = 0;
      isCorrect();
    }

    if (clickFirst !== -1 && clickSecond !== -1) {
      clickFirst = -1;
      clickSecond = -1;
    }
  }
};

getGameDOM();
cardArray.sort(() => 0.5 - Math.random());
// 확인 완료 console.log(cardArray)
setIDtoCardArray();
createBoard();
