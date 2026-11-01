

let firstCard = 11
let secondCard = 6

let sum = firstCard + secondCard

let hasBlackjack = false

let isLive = true

let message = ""

let messageEl = document.getElementById("message-el")



let sumEl = document.getElementById("sum-el")
// //using queryselectors to select an element
// let sumEl = document.querySelector("#sum-el")

let cardEl = document.getElementById("cards-el")

function renderGame() {

    cardEl.textContent = "Cards: " + firstCard + " " + secondCard

    //getting the sum of the cards prinded on the screen
    sumEl.textContent = "Sum: " + sum

    //displaying message of what you got during the game
    if (sum <= 20) {
        message = "Do you want to draw another card. you are not yet there"
    } 
    else if (sum === 21) {
        message = "You got black jack"
        hasBlackjack = true
    }
    else {
        message = "you are out of game"
        isLive = false
        console.log(isLive)
    }
    console.log(hasBlackjack)

    messageEl.textContent = message
}

//start game function
function startGame() {
    renderGame()
}

// new card function
function newCard() {
    let thirdCard = 4
    
    sum += thirdCard

    renderGame()

}

