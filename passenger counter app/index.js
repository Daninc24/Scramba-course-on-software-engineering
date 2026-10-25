
//document object model its ususally how people use javascript to modify website
//making increment button affect the count-el id


let countEl = document.getElementById("count-el")

let count = 0

function increment() {
    count += 1

    countEl.innerText = count

    
}

//creating a save() function

function save() {

    let savEl = document.getElementById("save-el")
    let previousEntry = count + " - "
    savEl.textContent += previousEntry

    //reset count to 0
    count = 0
    countEl.textContent = count
    
}

//after safe return the count to zero 

//working with strings on javascript learning about datatypes