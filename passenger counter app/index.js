
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




