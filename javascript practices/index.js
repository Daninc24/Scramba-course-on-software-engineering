
// //creating error message
// let error = document.getElementById("error") 

// function purchase() {
//     error.textContent = "something went wrong. please try again"
//     // console.log(error)
// }

// //returning random numbers on function


// let player1Time = 102
// let player2Time = 107

// //write a function that returns the total race time
// //call/invoke the function and store the return value in a variable
// //log the variable to the console

// function totalRaceTime() {
//     return player1Time + player2Time
// }

// let totalTime = totalRaceTime()
// // console.log(totalTime)


// // learning about logical operators

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if (hasSolvedChallenge === false && hasHintsLeft === false){
//     solvesSolution()
// }

// //write a if statement that checks if both variables are false
// //if so run the solveSolution() function

// function solvesSolution(){
//     console.log("showing the solution")
// }


// let likesDocumentaries = true
// let likesStartups = false

// if (likesDocumentaries === true || likesStartups === true) {
//     recommendMovie()
// }



// function recommendMovie() {
//     console.log("Hey, check out this new film we think you will like!")
// }


// // learning about objects in javascript 

// let castle = {
//     location: "Limuru",
//     cost: 2000,
//     food: ["pilau", "mukimo", "nyamachoma"],
//     swimmingPool: true,
//     otherCastles: function() {
//         return "There are other castles in the area"

//     }
// }

// console.log(castle.location)
// console.log(castle.swimmingPool)

// for (let i = 0; i <= 20; i++) {
//     console.log(i)
// }


let person = {
    name: "Daniel",
    age: 27,
    country: "kenya"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}
logData()

let age = 18

if (age < 6) {
    console.log("free")
}
else if (age < 18) {
    console.log("child discount")
}
else if( age < 27) {
    console.log("student discount")
}
else if (age <= 66){
    console.log("full price")
}
else {
    console.log("senior citizen discount")
}

let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]

for ( let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i])
}

let largeCountries2 = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

largeCountries2.pop()
largeCountries2.shift()
largeCountries2.push("Pakistan")
largeCountries2.unshift("China")

console.log(largeCountries2)

let dayOfMonth = 13
let weekday = "Friday"

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("its time of party after  party lol")
}