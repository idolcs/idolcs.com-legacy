const target = new Date("June 15, 2024");
const now = new Date();
let remainingSeconds = target - now;
const total_chapters = 61;

const ti_days = document.getElementById("ti_days");
const ti_hours = document.getElementById("ti_hours");
const ti_minutes = document.getElementById("ti_minutes");
const ti_seconds = document.getElementById("ti_seconds");
const timer_cpd = document.getElementById("timer_cpd");

setInterval(() => {
    remainingSeconds -= 1000;
    const {days, hours, minutes, sec} = dhm(remainingSeconds);
    ti_days.innerText = String(days).padStart(2, "0");
    ti_hours.innerText = String(hours).padStart(2, "0");
    ti_minutes.innerText = String(minutes).padStart(2, "0");
    ti_seconds.innerText = String(sec).padStart(2, "0");
    const cpd = (total_chapters / remainingSeconds) * (1000 * 60 * 60 * 24)
    timer_cpd.innerText = cpd.toFixed(7);
}, 1000);

function dhm (ms) {
    const days = Math.floor(ms / (24*60*60*1000));
    const daysms = ms % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = ms % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = ms % (60*1000);
    const sec = Math.floor(minutesms / 1000);
    return {
        days,
        hours,
        minutes,
        sec
    }
  }