// let myForm = document.querySelector("#my-form")
// let count = 0;

// myForm.addEventListener("submit", function(event){
    
//     // vypneme výchozí chování formuláře
//     event.preventDefault()

//     // přístup k obsahu políčka
//     console.log(event.target.elements.task.value)

//     // count zvyšujeme o 1
//     count = count + 1

//     let input = document.createElement("input")
//     input.type = "checkbox"
//     input.id = `testovaci-${count}`
//     console.log(input)
//     document.querySelector("#results").appendChild(input)

//     let label = document.createElement("label")
//     label.textContent = event.target.elements.task.value
//     label.setAttribute("for", `testovaci-${count}`)
//     document.querySelector("#results").appendChild(label)
//     console.log(label)

//     // vymaže obsah políčka
//     event.target.elements.task.value = ""

// })

// let mySelect = document.querySelector("#my-select")

// mySelect.addEventListener("change", function(event){
//     console.log(event.target.value)
// })

let button = document.querySelector("button")

button.addEventListener("mouseenter", function(event){
    console.log("my mouse entered the button")
})