// SELECTIONS:
let selBtnPlay= document.querySelector(".btnPlay");
let selBtnPause= document.querySelector(".btnPause");
let selBtnReset= document.querySelector(".btnReset");
let selHrs= document.querySelector(".hrs");
let selMins= document.querySelector(".mins");
let selSecs= document.querySelector(".secs");

let count= 0; // Global variable to count seconds
let idInterval= null; // When there is no counting, no ID is generated — that's why it's initially set to null

//PLAY

selBtnPlay.addEventListener("click", startCountIfNotRunning);

function startCountIfNotRunning() {
    // If the counter hasn't started yet, idInterval will be null. 
    // If it's already running, idInterval will have a value. 
    // This prevents errors if the play button is pressed multiple times.
    if (idInterval === null) {
        callFunctCountEverySecond();
    }
}

function callFunctCountEverySecond() {
    idInterval = setInterval(funcCount, 1000); // Two things happen in this line of code: when this method is saved in a variable, it provides an ID number that gets stored, and at the same time, it starts calling the function every 1000ms
    console.log("The id of the interval is: " + idInterval);
}

function funcCount() {
    count++; // Increases by 1
    calculateHrsMinsSecs(count); //Calling funtion and paasing the count to calculate hrs-mins-secs
}

function calculateHrsMinsSecs(count) {
    console.log(count);
    let secs = count % 60;
    let mins = Math.floor((count % 3600) / 60);
    let hrs = Math.floor(count / 3600);
    console.log(hrs + ":" + mins + ":" + secs);
    updateDisplay(hrs, mins, secs);
}

function updateDisplay(hrs, mins, secs) {
    selSecs.textContent = secs.toString().padStart(2, "0");
    selMins.textContent = mins.toString().padStart(2, "0");
    selHrs.textContent = hrs.toString().padStart(2, "0");
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