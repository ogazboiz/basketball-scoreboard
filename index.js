// index.js

document.addEventListener("DOMContentLoaded", function() {
    let homeScore = document.getElementById("home_score");
    let guestScore = document.getElementById("guest_score");
    let resetScore = document.getElementById("reset");
    let homeCount = 0;
    let guestCount = 0;

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
});
