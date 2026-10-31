

let firstCard = 11
let secondCard = 10

let sum = firstCard + secondCard

let hasBlackjack = false

let isLive = true

let message = ""

let messageEl = document.getElementById("message-el")

function startGame() {

    if (sum <= 20) {
        message = "Do you want to draw another card. you are not yet there"
    } 
    else if (sum === 21) {
        message = "wololoooo! you got black jack"
        hasBlackjack = true
    }
    else {
        message = "you are out of game hehe"
        isLive = false
        console.log(isLive)
    }
    console.log(hasBlackjack)


    console.log(message)
    messageEl.textContent = message
}

//check out money

