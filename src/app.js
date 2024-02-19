let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
    // Check if the timer is already running
    if (!timer) {
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
}


function stopTimer() {
    clearInterval(timer);
    timer = null; // Set timer to null when stopping
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

function lapClear() {
    const lapList = document.getElementById('lapList');
    lapList.innerHTML = ''; // Clears the content of the lapList
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



// Keyboard event listeners
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'a':
            // 'a' key for play
            startTimer();
            break;
        case 's':
            // 's' key for stop
            stopTimer();
            break;
        case 'Backspace':
            // Backspace key for reset
            resetTimer();
            break;
        case 'Enter':
            // Enter key for lap and Shift+Enter for lap clear
            if (event.shiftKey) {
                lapClear();
            } else {
                lap();
            }
            break;
        default:
            break;
    }
});



