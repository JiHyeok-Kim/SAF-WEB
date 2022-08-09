const bucketLists = [
  {
    id: 1,
    text: "여행 가기",
    done: false,
  },
  {
    id: 2,
    test: "치킨 먹기",
    done: true,
  },
  {
    id: 3,
    test: "코딩 하기",
    done: true,
  },
  {
    id: 4,
    test: "요리 하기",
    done: false,
  }
];

const Array = bucketLists.filter((bucketList, idx) =>  === false);
console.log(Array);