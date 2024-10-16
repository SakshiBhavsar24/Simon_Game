let gameSeq = [];
let userSeq = [];
let btns = ["purple", "green", "yellow", "pink"];

let started = false;
let level = 0;

h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 300);
}

function usrFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomClr = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomClr}`);
    gameSeq.push(randomClr);
    console.log(gameSeq);
    // console.log(randomIdx);
    // console.log(randomClr);
    // console.log(randBtn);
    gameFlash(randBtn);
}

function btnPress() {
    //console.log(this);
    let btn = this;
    usrFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    check(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function check(idx) {
    //console.log("current level: ",level);
    

    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b> ${level - 1} </b> <br> Press any key to start again`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        } , 200);
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}