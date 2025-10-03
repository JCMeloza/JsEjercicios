let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;
let running = false;

function updateDisplay() {
    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    document.getElementById("timer").textContent = `${h}:${m}:${s}`;
}

function startTimer() {
    if (!running) {
        running = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;
                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(interval);
}

function resetTimer() {
    running = false;
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
