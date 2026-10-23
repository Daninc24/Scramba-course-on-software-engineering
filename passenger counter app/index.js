
//document object model its ususally how people use javascript to modify website
//making increment button affect the count-el id

let countEl = document.getElementById("count-el") //passing an argument
console.log(countEl)


let count = 0

function increment() {
    count = count + 1

    countEl.innerText = count
    console.log(count)
}




