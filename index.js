homeScore= document.getElementById("home_score") 
guestScore= document.getElementById("guest_score")
resetScore= document.getElementById("reset")
count = 0
function home_one(){
    count = count + 1
    homeScore.textContent = count
}
function home_two(){
    count = count + 2
    homeScore.textContent = count
}
function home_three(){
    count = count + 3
    homeScore.innerText = count
}
function guest_one(){
    count = count + 1
    guestScore.innerText = count
}
function guest_two(){
    count = count + 2
    guestScore.innerText = count
}
function guest_three(){
    count = count + 3
    guestScore.innerText = count
}
function defaultss() {
    count = 0
    guestScore.innerText = count
    homeScore.innerText = count
}
