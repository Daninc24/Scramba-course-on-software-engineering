
//creating error message
let error = document.getElementById("error") 

function purchase() {
    error.textContent = "something went wrong. please try again"
    console.log(error)
}

//returning random numbers on function


let player1Time = 102
let player2Time = 107

//write a function that returns the total race time
//call/invoke the function and store the return value in a variable
//log the variable to the console

function totalRaceTime() {
    return player1Time + player2Time
}

let totalTime = totalRaceTime()
console.log(totalTime)