let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    timer = setInterval(function () {
        milliseconds++;
        if (milliseconds === 1000) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        updateDisplay();
    }, 1); // Change the interval to 1 millisecond for more accurate timing
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function lap() {
    // Create a new lap entry and append it to a list or display it in another way
    const lapTime = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
    const lapList = document.getElementById('lapList');
    const lapEntry = document.createElement('li');
    lapEntry.textContent = lapTime;
    lapList.appendChild(lapEntry);
}

function lapClear (){
    clearInterval (lapList);
}

function updateDisplay() {
    document.getElementById('timerDisplay').innerText = `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(milliseconds, 3)}`;
}

function padNumber(number, length = 2) {
    let str = String(number);
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}



document.getElementById('playButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
document.getElementById('lapButton').addEventListener('click', lap);
document.getElementById('lapClearButton').addEventListener('click', lapClear);
