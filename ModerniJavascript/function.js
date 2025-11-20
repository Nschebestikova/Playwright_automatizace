//funkce načítající data z LocalStorage, Ošetřit, pokud sata v loclaStorage nejsou
const getSavedNames = function() {
    const myNames = localStorage.getItem("names") // získá data z LocalStorage s klíčem "names"
// pokud v localStorage nejsou žádná data, vrátí prázdné pole
    if(myNames !== null) {
        return JSON.parse(myNames)
    } else {   // pokud data nejsou, vrátí prázdné pole
        return [] // vrátí prázdné pole
    }
    
};

// funkce pro použítí při odeslání formuláře, Ukládá do localStorage jméno z formuláře

const saveNames = function(oneName){ // funkce pro uložení jmen do LocalStorage
    const names = getSavedNames(); // načte aktuální pole jmen
    names.push(oneName); // přidá nové jméno do pole
    localStorage.setItem("names", JSON.stringify(names)); // uloží aktualizované pole do LocalStorage
}

const generateHTMLstructure = function(myName) { // funkce pro generování HTML struktury
    const newDiv = document.createElement("div") // vytvoří nový div
    const newSpan = document.createElement("span") // vytvoří nový span
    const newLink = document.createElement("a") // vytvoří nový odkaz

    newLink.textContent = myName.firstName // použijeme správnou proměnnou
    if(myName.adult === true){
        newLink.classList.add("adult")
    }

    newLink.setAttribute("href", `/edit.html#${myName.id}`) // nastaví odkaz na editaci jména
    newDiv.appendChild(newLink) // přidá odkaz do divu

    const button = document.createElement("button") // vytvoří nový button

    // nastavení mazacího tlačítka
    button.textContent = "Smazat" // nastaví text tlačítka
    newDiv.appendChild(button) // přidá tlačítko do divu

    newSpan.textContent = myName.firstName // nastaví text span na jméno
    if(myName.adult === true){
        newSpan.classList.add("adult")
    } else {
        newSpan.classList.add("no-adult")
    } // dá třídu podle toho, zda je osoba dospělá nebo ne

    newDiv.appendChild(newSpan) // přidá span do divu
    return newDiv
}
