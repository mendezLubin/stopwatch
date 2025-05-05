// alert("conected");
// SELECTIONS:
let selBtnPlay= document.querySelector(".btnPlay");
let selBtnPause= document.querySelector(".btnPause");
let selBtnReset= document.querySelector(".btnReset");
let selHrs= document.querySelector(".hrs");
let selMins= document.querySelector(".mins");
let selSecs= document.querySelector(".secs");

let secondsCounter= 0; // Global variable to count seconds
let intervalId= null; // Global variable and intentionally left empty

//PLAY

selBtnPlay.addEventListener("click", funcStart);

function funcStart() {
    alert("I got click");
}

//PAUSE

selBtnPause.addEventListener("click", funcPause);

function funcPause() {
    alert("I got click");
}

