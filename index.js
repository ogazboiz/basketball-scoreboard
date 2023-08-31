// index.js

let homeScore, guestScore, resetScore, homeCount, guestCount;

document.addEventListener("DOMContentLoaded", function() {
    homeScore = document.getElementById("home_score");
    guestScore = document.getElementById("guest_score");
    resetScore = document.getElementById("reset");
    homeCount = 0;
    guestCount = 0;
});

function homeOne() {
    homeCount += 1;
    homeScore.textContent = homeCount;
}

function homeTwo() {
    homeCount += 2;
    homeScore.textContent = homeCount;
}

function homeThree() {
    homeCount += 3;
    homeScore.textContent = homeCount;
}

function guestOne() {
    guestCount += 1;
    guestScore.textContent = guestCount;
}

function guestTwo() {
    guestCount += 2;
    guestScore.textContent = guestCount;
}

function guestThree() {
    guestCount += 3;
    guestScore.textContent = guestCount;
}

function defaultss() {
    homeCount = 0;
    guestCount = 0;
    homeScore.textContent = homeCount;
    guestScore.textContent = guestCount;
}
