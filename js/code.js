/* Fixing mobile scroll
Need to use height: 100vh so the container fills the screen and centers the stopwatch. But 100vh causes issues on mobile, so I used a solution combining CSS and JS to fix it.
It's ideal to place this code at the very top of your JavaScript file,so it runs as early as possible when the page loads.
This script calculates the actual viewport height and sets it as a CSS variable (--vh).
It fixes the 100vh issue on mobile devices by excluding the browser UI (like the address bar).
The --vh variable is then used in CSS to apply the correct height.
This function runs on load and updates on window resize to keep the value accurate.
*/
function setVh() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", vh + "px");
}
setVh();
window.addEventListener("resize", setVh);

/*
This timer works by using setInterval(funcCount, 1000), which calls the function every 1000 milliseconds (1 second).
Each time the function is call, the function increases the count variable by 1.
When we store setInterval in a variable like: let idInterval = setInterval(funcCount, 1000);
it gives an ID number (e.g. this might return 1) that we can later use to stop the interval with clearInterval(idInterval).
Using just these two "setInterval" to play and "clearInterval" to stop, we can simulate a pause, because the count value is not reset, just temporarily stopped the function of increasing 1.
To reset the timer completely, we reset the variable count to 0 and update the display to show "00:00:00".
*/

// SELECTIONS:
let selBtnPlay= document.querySelector(".btnPlay");
let selBtnPause= document.querySelector(".btnPause");
let selBtnReset= document.querySelector(".btnReset");
let selHrs= document.querySelector(".hrs");
let selMins= document.querySelector(".mins");
let selSecs= document.querySelector(".secs");
let selCents= document.querySelector(".cents");

let count= 0; // Global variable to count every hundredth of a second
let idInterval= null; 
/* This variable is necessary because when we use setInterval(funcCount, 1000) and store it in a variable, it returns an ID. To stop the interval later, we must pass that ID to clearInterval(id).For example: idInterval = setInterval(funcCount, 1000); might return 1, so we later call clearInterval(idInterval) to stop it. 

When there is no counting, no ID is generated — that's why it's initially set to null
*/

//PLAY

selBtnPlay.addEventListener("click", startCountIfNotRunning);

function startCountIfNotRunning() {
    // If the counter hasn't started yet, idInterval will be null. 
    // If it's already running, idInterval will have a value. 
    // This prevents errors if the play button is pressed multiple times.
    if (idInterval === null) {
        playClickSound(); // Play sound
        callFunctCountEverySecond();
    }
}

function callFunctCountEverySecond() {
    idInterval= setInterval(funcCount, 10); // Two things happen in this line of code: when this method is saved in a variable, it provides an ID number that gets stored, and at the same time, it starts calling the function every 1000ms
    console.log("The id of the interval is: " + idInterval);
}

function funcCount() {
    count++; // Increases by 1
    calculateHrsMinsSecs(count); //Calling funtion and paasing the count to calculate hrs-mins-secs
}

function calculateHrsMinsSecs(count) {
    console.log(count);
    let totalSeconds= Math.floor(count/100);
    let cents= count % 100;
    let secs= totalSeconds % 60;
    let mins= Math.floor((totalSeconds % 3600) / 60);
    let hrs= Math.floor(totalSeconds / 3600);
    console.log(hrs + ":" + mins + ":" + secs);
    updateDisplay(hrs, mins, secs, cents);
}

function updateDisplay(hrs, mins, secs, cents) {
    selCents.textContent= cents.toString().padStart(2, "0");
    selSecs.textContent= secs.toString().padStart(2, "0");
    selMins.textContent= mins.toString().padStart(2, "0");
    selHrs.textContent= hrs.toString().padStart(2, "0");
    /*padStart(2, "0") ensures the string has at least 2 digits. If the value is less than 2 digits, it adds a leading zero (e.g., "5" becomes "05"). 
    It works only on strings, which is why the value is converted to a string before using padStart. */
}

//PAUSE

selBtnPause.addEventListener("click", funcPause);

/* There is no real "pause"—only play and stop. What we call "pause" still allows continuation because we don't reset the count variable. Even if we resume with a different interval ID, the count value remains unchanged. */

// Play & store generated ID → idInterval = setInterval(funcCount, 1000);
// Stop → clearInterval(idInterval);

function funcPause() {
    playClickSound(); // Play sound
    clearInterval(idInterval); // Stop the interval
    idInterval= null; 
    /* Set to null here because it allows the timer to be resumed later. In the condition if (idInterval === null), if idInterval is null, the function callFunctCountEverySecond() will be executed. If it is not null, the condition will not be true, and the function will not be called to continue the count. */
    } 

// RESET

selBtnReset.addEventListener("click", funcReset);

function funcReset() {
    playClickSound(); // Play sound
    clearInterval(idInterval); // Stop the interval (pause the timer)
    idInterval= null; // Reset the interval ID so the timer can be started again
    count= 0; // Reset the counter to zero

    // Display "00:00:00" on screen:
    selSecs.textContent= "00";
    selMins.textContent= "00";
    selHrs.textContent= "00";
    selCents.textContent= "00";
}

function playClickSound() {
  const audio = new Audio("./assets/blopnew.mp3");
  audio.play();
}