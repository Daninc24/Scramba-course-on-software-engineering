
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

let greeting = "hello my name is "

let myGreetings = greeting + name 

console.log(myGreetings)
 //escape character on strings\

 let wish = 'I\'d wish the show "The lion kign"'
 console.log(wish)
//the escape character tells javascript that the next character should not be seen as string delimiter
