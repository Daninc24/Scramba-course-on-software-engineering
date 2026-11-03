

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isLive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// //using queryselectors to select an element
// let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("cards-el")
//start game function

function getRandomCard() {
   let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } 
    else if (randomNumber > 10) {
        return 10
    }
    else{
        return randomNumber
    }
}



function startGame() {
    renderGame()
}

function renderGame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent +=  + cards[i] + " "
    }
    

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



// new card function
function newCard() {
    let thirdCard = getRandomCard()
    
    sum += thirdCard

    cards.push(thirdCard)

    

    console.log(cards)

    renderGame()

}

