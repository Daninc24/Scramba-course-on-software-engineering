
//document object model its ususally how people use javascript to modify website
//making increment button affect the count-el id


let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count = count + 1

    countEl.innerText = count

    
}

//creating a save() function

function save() {
    console.log(count)
}


//working with strings on javascript learning about datatypes

let name = "Daniel"

let welcomeEl = document.getElementById("welcome-el")

function welcome() {
    let greeting = "Welcome back " + name

    welcomeEl.innerText = greeting

    console.log(greeting)  

}

welcome()


