let homeScore= document.getElementById("home_score") 
let guestScore= document.getElementById("guest_score")
let resetScore= document.getElementById("reset")
let count = 0

function homeOne(){
    count  +=  1
    homeScore.innerText= count
}
function homeTwo(){
    count = count + 2
    homeScore.textContent = count
}
function homeThree(){
    count = count + 3
    homeScore.textContent = count
}
function guestOne(){
    count = count + 1
    guestScore.textContent = count
}
function guestTwo(){
    count = count + 2
    guestScore.textContent = count
}
function guestThree(){
    count = count + 3
    guestScore.textContent = count
}
function defaultss() {
    count = 0
    guestScore.textContent = count
    homeScore.textContent = count
}