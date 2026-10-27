

let firstCard = 6
let secondCard = 10

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("do you want to draw another card")
} else if (sum === 21) {
    console.log("wololoooo! you got black jack")
} else if (sum > 21) {
    console.log("you are out of game hehe")
}