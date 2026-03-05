const homeScore = document.querySelector(".home-score")
const guestScore = document.querySelector(".guest-score");

function addToHomePoints(n) {
    homeScore.textContent = parseInt(homeScore.textContent) + n;
}

function addToGuestPoints(n) {
    guestScore.textContent = parseInt(guestScore.textContent) + n;
}