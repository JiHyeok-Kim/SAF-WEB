// number를 조작할 수 있는 함수
const ssafy = {
    number: 99,
    eat(){
        this.number = this.number + 5;
    },
    run(){
        this.number = this.number - 10;
    },
    show(){
        console.log(this.number);
    }
}

ssafy.eat();
ssafy.run();
ssafy.show();

ssafy.name = "김싸피";
console.log(ssafy);