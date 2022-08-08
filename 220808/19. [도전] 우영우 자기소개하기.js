class Lawyer{
    constructor(name, age, me){
        this.name = name;
        this.age = age;
        this.me = me;
    }

    introduce(){
        console.log("이름: " + this.name);
        console.log("나이: " + this.age);
        console.log("자기소개: " + this.me);
    }
}

const one = new Lawyer("우영우", 27, "기러기 토마토 스위스 역삼역");
one.introduce();
const two = new Lawyer("최수연", 27, "봄날의 햇살");
two.introduce();