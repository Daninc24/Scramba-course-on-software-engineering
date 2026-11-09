


let myLeads = ["www.radio.com", "www.fb.dan", "www.dansinc.net"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener( "click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    console.log(myLeads)
    

})


for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}