class Hero{
  constructor(){
    this.hp = 100;
  }
  run(){
    this.hp -= 10;
  }
}

class SuperMan extends Hero{
  fly(){
    console.log("fly");
    console.log(this.hp);
  }
}

let superman = new.SuperMan();

superman.run();
superman.fly();

// 상속을 받으면 부모의 속성을 그대로 사용할 수 있다.