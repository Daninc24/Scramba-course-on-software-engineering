

// console.log(mySkills[4])
// console.log(mySkills[2])
// console.log(mySkills[0])

// arrays are called composite data types or complex data type

//create array discribing yourself composed of the primitive data types we have learned

// let myData = ["Daniel", 27, true]

// console.log(myData.length)

// let messages = ["hello serenity",
//     "how are you doing today",
//     "how is the halloween taking you"
// ]

// let newMessage = "hope you will drop by for supper"

// messages.push(newMessage)
// messages.pop()

// console.log(messages)


// learning about loops 
//counting using for loops

// for (let count = 10;count < 21; count += 1 ) {
//     console.log(count)
// }

// //create a for loop that counts from 10 to 100 in steps of 10

// for (let count = 10; count <= 100; count += 10){
//     console.log(count)
// }

let sentences = ["hello serenity", "hello shania", "hello grace", "hello mariam"]

let greetingEl = document.getElementById("greeting-el")

for ( let i = 0; i < sentences.length; i++) {
    greetingEl.textContent += sentences[i] + " "
    console.log(sentences[i])
}