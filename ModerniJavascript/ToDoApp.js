let myToDos = [{
    text: "Vynést koš",
    completion: false
},{
    text: "Dojít nakoupit",
    completion: false
},{
    text: "Uklidit",
    completion: true
},{
    text: "Nakrmit psa",
    completion: true
},{
    text: "Nakrmit kočku",
    completion: false
}]

let toDoLeft = myToDos.filter(function(oneToDo) {
    return oneToDo.completion === false
})

console.log(toDoLeft.length) //vypíše mi objekty, které mají completion false

const paragraph = document.createElement("p")
paragraph.textContent = `Zbývá ještě udělat úkolů: ${toDoLeft.length}`
document.body.appendChild(paragraph)


for (let i = 0; i<  myToDos.length; i++) {
    let paragraph = document.createElement("p")
    if(myToDos[i].completion === false) {
    paragraph.textContent = myToDos[i].text
     document.querySelector("body").appendChild(paragraph)
}

} 


// Funkce pro zjištění počtu zbývajících úkolů
const getRemainigToDos = function(todos) {
    let remainingTodos = todos.filter(function(todo) {
        return !todo.completion
    })
    return `Zbývá dokončit ${remainingTodos.length} úkolů`
}

// Výpis do konzole
console.log(getRemainigToDos(myToDos))

// Výpis jednotlivých nedokončených úkolů
const getUncompletedTodos = function(todos) {
    let uncompletedTodos = todos.filter(function(todo) {
        return !todo.completion
    })
    console.log("Seznam nedokončených úkolů:")
    uncompletedTodos.forEach(function(todo) {
        console.log(`- ${todo.text}`)
    })
}

getUncompletedTodos(myToDos)

const myBtn = document.querySelector(".myBtn")
if (myBtn) {
    myBtn.addEventListener("click", function(event){
        event.target.textContent = "Kliknutí bylo provedeno"
    });
}

let button1 = document.querySelector(".first-button")
let button2 = document.querySelector(".second-button")

if (button1) {
    button1.addEventListener("click", function(event) {
        event.target.textContent = "Kliknutí bylo provedeno"
    });
}
if (button2) {
    button2.addEventListener("click", function(event) {
        event.target.textContent = "Kliknutí bylo provedeno"
    });
}

let input = document.querySelector("#input-text")
if (input) {
    input.addEventListener("input", function(event) {
        console.log(event.target.value)
    });
}


// Vypsat všechny úkoly do odstavců a zobrazit na stránce
for(let i = 0; i < myToDos.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDos[i].text
    document.querySelector("#results-todos").appendChild(paragraph)
}

document.querySelector(".myBtn").addEventListener("click", function(event){
    console.log("Kliknutí bylo provedeno")
})


/*********** 
* Filtrování
***********/

// Pro ukládání textu z vyhledávacího políčka
const filters = {
    searchText: ""
}

// Obecná filtrovací funkce
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })

    document.querySelector("#results-todos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#results-todos").appendChild(paragraph)
    })
}

  // Kolik úkolů zbývá udělat
    document.querySelector("#toDosLeft").innerHTML = ""

    let leftToDos = ourResults.filter(function(oneToDo){
        return oneToDo.completion === false
    })

    console.log(leftToDos.length)

    let paragraph = document.createElement("p")
    paragraph.textContent = `Ještě zbývá udělat úkolů: ${leftToDos.length}`
    document.querySelector("#toDosLeft").appendChild(paragraph)


    // Vypisování úkolů do stránky
    document.querySelector("#results-todos").innerHTML = ""

    ourResults.forEach(function(oneResult){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResult.text
        document.querySelector("#results-todos").appendChild(paragraph)
    })


// Načítáme text z políčka
let searchText = document.querySelector("#search-text")
searchText.addEventListener("input", function(event){
    filters.searchingText = event.target.value
    
    // Voláme filtrovací funkci
    renderToDos(myToDos, filters)
})

