let str = "bts@macdonald.co.kr||inho@mincoding.co.kr||jason@jyp.com";

// co.kr과 com을 net로 변경
str = str.replace(/co.kr/g, 'net');
str = str.replace(/com/g, 'net');

//str = str.replace(/co.kr|com/g, 'net')

const array = str.split("||");

const idArray = [];

for(let i = 0; i < array.length; i++){
    const index = array[i].indexOf("@");
    //확인 console.log(index);
    const id = array[i].substring(0, index);
    //확인 console.log(id);
    idArray.push(id);
}

console.log(idArray);