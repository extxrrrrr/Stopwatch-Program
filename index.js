const display = document.getElementById("display");
let timer = null;
let starTime = 0;
let elapsedtTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        starTime = Date.now() - elapsedtTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }

}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedtTime = Date.now() - starTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    starTime = 0;
    elapsedtTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedtTime = currentTime - starTime;

    let hours = Math.floor(elapsedtTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedtTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedtTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedtTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}