let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

const date = new Date("01-01-2026").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days < 10 ? "0" + days : days;
    hour.innerHTML = hours < 10 ? "0" + hours : hours;
    minute.innerHTML = minutes < 10 ? "0" + minutes : minutes;
    second.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    


    if (distance < 0) {
        clearInterval(x);
        day.innerHTML = hour.innerHTML = minute.innerHTML = second.innerHTML = "00";
    }
}, 1000);
