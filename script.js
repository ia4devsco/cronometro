let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStopButton');

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateDisplay, 1);
        startStopButton.textContent = 'Stop';
        running = true;
    } else {
        clearInterval(timerInterval);
        startStopButton.textContent = 'Start';
        running = false;
    }
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    display.textContent = '00:00:00:000';
    startStopButton.textContent = 'Start';
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    milliseconds = (milliseconds < 100) ? '0' + milliseconds : milliseconds;
    milliseconds = (milliseconds < 10) ? '00' + milliseconds : milliseconds;

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
