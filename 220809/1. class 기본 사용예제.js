class Human{
  constructor(name, age){
    this.hp = 100;
    this.age = age;
    this.name = name;
  }
  introduce(){
    console.log("이름: " + this.name);
    console.log("나이: " + this.age);
  }
  run(){
    this.hp -= 10;
  }
  helthChek(){
    console.log(this.hp);
  }
}

const character1 = new Human("jony", 40);
const character2 = new Human("sylvie", 17);
character1.introduce();
character2.introduce();
character1.run();
character1.helthChek();