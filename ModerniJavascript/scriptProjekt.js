

// filepath: c:\Users\Nikča\Desktop\ModerniJavascript\scriptProjekt.js
const names = getSavedNames() // Načte jména z LocalStorage pomocí funkce getSavedNames

let myForm = document.querySelector("#test-form") // selektuje formulář s id "test-form"
let myCheckbox = document.querySelector(".my-checkbox") // selektuje checkbox s třídou "my-checkbox"


myForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Zabrání odeslání formuláře a obnovení stránky

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value, // získá hodnotu z pole s názvem "firstName"
        adult: myCheckbox.checked // získá hodnotu z checkboxu
    })

    event.target.elements.firstName.value = "" // Vyprázdní pole po odeslání
    myCheckbox.checked = false // Zruší zaškrtnutí checkboxu po odeslání
    saveNames(names) // Uloží jména do LocalStorage
})


let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", function() {

    let namesFromStorage = localStorage.getItem("names") // Načte jména z LocalStorage
    let namesFromStorageJSON= JSON.parse(namesFromStorage)

    namesFromStorageJSON.forEach(function(oneName){
      const oneNameHTML  = generateHTMLstructure(oneName) // Vytvoří HTML strukturu pro každé jméno/ZAVOLÁ FUNKCI
      document.querySelector(".list-names").appendChild(oneNameHTML) // Přidá HTML strukturu do elementu s třídou "list-names"

    })

    })

