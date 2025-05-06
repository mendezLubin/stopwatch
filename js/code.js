// SELECTIONS:
let selBtnPlay= document.querySelector(".btnPlay");
let selBtnPause= document.querySelector(".btnPause");
let selBtnReset= document.querySelector(".btnReset");
let selHrs= document.querySelector(".hrs");
let selMins= document.querySelector(".mins");
let selSecs= document.querySelector(".secs");

let secondsCounter= 0; // Global variable to count seconds
// let intervalId= null; 
// Global variable and intentionally left empty

//PLAY

selBtnPlay.addEventListener("click", funcStart);

function funcStart() {
    setInterval(funcCount, 1000); // Method that executes the function every 1000ms
}

//PAUSE

selBtnPause.addEventListener("click", funcPause);

function funcPause() {
    alert("I got click");
}

// RESET

selBtnReset.addEventListener("click", funcReset);

function funcReset() {
    alert("I got click");
}

// SECONDS COUNTER
function funcCount() {
    secondsCounter++; // Increases by 1
    // console.log(secondsCounter);

    // Calculation of hrs:min:sec
    let secs = secondsCounter % 60; // Modulo 60 to always show the remainder divided by 60
    let mins = Math.floor((secondsCounter % 3600) / 60); // Whole numbers only, no decimals
    let hrs = Math.floor(secondsCounter / 3600); 

    console.log(hrs + ":" + mins + ":" + secs);
}
