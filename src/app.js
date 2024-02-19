let timer;
let minutes = 0;
let seconds = 0;

function startTimer() {


}

function stopTimer() {
    clearInterval(timer);

}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('timerDisplay').innerText = `${padNumber(minutes)}:${padNumber(seconds)}`;

}

function padNumber(number) {
    return number < 10 ? `0${number}` : number;
}


document.getElementById('playButton').addEventListener('click',startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);


