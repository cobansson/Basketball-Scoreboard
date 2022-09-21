let numberHome = 0;
let number1Element = document.getElementById("number1");

function home1() {
    numberHome = numberHome + 1;
    number1Element.textContent = numberHome;
}

function home2() {
    numberHome = numberHome + 2;
    number1Element.textContent = numberHome;
}

function home3() {
    numberHome = numberHome + 3;
    number1Element.textContent = numberHome;
}

let numberAway = 0;
let number2Element = document.getElementById("number2");

function away1() {
    numberAway = numberAway + 1;
    number2Element.textContent = numberAway;
}

function away2() {
    numberAway = numberAway + 2;
    number2Element.textContent = numberAway;
}

function away3() {
    numberAway = numberAway + 3;
    number2Element.textContent = numberAway;
}

function check() {

if (numberHome > numberAway) {
number1Element.className = "numberYes";
number2Element.className = "numberStyle";
} else {
if (numberHome < numberAway) {
    number2Element.className = "numberYes";
    number1Element.className = "numberStyle";
    } else {
        number1Element.className = "numberStyle";
        number2Element.className = "numberStyle";
    }
}
}

let foulNo1 = 0;
let foulHomeElement = document.getElementById("foulnumber1");

function foul1() {
    foulNo1 = foulNo1 + 1;
    foulHomeElement.textContent = foulNo1;
}

let foulNo2 = 0;
let foulAwayElement = document.getElementById("foulnumber2");

function foul2() {
    foulNo2 = foulNo2 + 1;
    foulAwayElement.textContent = foulNo2;
}

let paragraphElement = document.getElementById("updateParagraph");

let timerElement = document.getElementById("updateTimer");

function start() {
    paragraphElement.textContent = "WE WISH BOTH TEAMS GOOD LUCK!"

    setTimeout(doEndTimer, 12*60*1000);
}

function doEndTimer() {
    timerElement.textContent = "GAME IS OVER";
    alarmSoundElement = document.getElementById("gamehorn");
    alarmSoundElement.play();

    if (numberHome > numberAway) {
        paragraphElement.textContent = "HOME WINS!"
    }

    if (numberHome < numberAway) {
        paragraphElement.textContent = "GUEST WINS!"
    }

    if (numberHome == numberAway) {
        paragraphElement.textContent = "DRAW!"
    }
}

function newgame() {
    paragraphElement.textContent = "CLICK ON THE BUTTON TO START THE GAME!"

    timerElement.textContent = "";

    numberHome = 0;
    number1Element.textContent = numberHome;

    numberAway = 0;
    number2Element.textContent = numberAway;

    foulNo1 = 0;
    foulHomeElement.textContent = foulNo1;

    foulNo2 = 0;
    foulAwayElement.textContent = foulNo2;
}