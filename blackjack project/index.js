

let firstCard = 11
let secondCard = 10

let sum = firstCard + secondCard

let hasBlackjack = false

let isLive = true

if (sum <= 20) {
    console.log("do you want to draw another card")
} 
else if (sum === 21) {
    console.log("wololoooo! you got black jack")
    hasBlackjack = true
}
else {
    console.log("you are out of game hehe")
    isLive = false
}

//check out money

console.log(hasBlackjack)
console.log(isLive)














// let age = 22

// if (age < 22) {
//     console.log("go home kid. you are not allowed here")
// }
// else {
//     console.log("you are welcome what will you drink ")
// }


//in norway if a person is exactly 100 years old they get a birthday card from the king


// let age = 99

// if (age < 100) {
//     console.log("you are not eligible for the birthday card from the king")
// }
// else if(age === 100) {
//     console.log("congratulations here is your birthday card from the king")
// }

// else {
//     console.log("you already received one. no more for you lols")
// }