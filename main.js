var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 100;
canvas.height = window.innerWidth - 100;
// 이게 도형을 그리기 위한 기본 코드
// 걍 따라 쳐야 함

// 등장 캐릭터의 속성을 object 자료에 정리해두면 편하다!
var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height); // this까먹지 말자
        // x,y 좌표에 width x height 의 사각형을 그려줘
    },
    //
};

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw() {
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// var cactus = new Cactus(); // 장애물 생성
// cactus.draw();
// dino.draw();

var timer = 0; // 프레임마다실행할거() 가 지나갈때마다 1증가하는 타이머
var cactuses = [];

function 프레임마다실행할거() {
    // 프레임마다 실행할 부분
    requestAnimationFrame(프레임마다실행할거);
    timer++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (timer % 120 == 0) {
        //  120프레임마다 한번씩 장애물을 그려주세요
        var cactus = new Cactus(); // 장애물 생성
        cactuses.push(cactus); // 장애물을 배열에 넣어서 관리하기
        cactus.draw();
    }

    cactuses.forEach((a) => {
        // 이 괴상한건 도대체 무엇?
        a.x--;
        a.draw();
    });

    dino.draw();
}

프레임마다실행할거();
