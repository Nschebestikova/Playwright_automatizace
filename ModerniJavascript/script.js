
/*
console.log ("Učíme se JavaScript")
console.log ("Učíme se nové věci")
*/

/*let jmeno = "Nikola"
let job = "tester"

console.log ("Ahoj " + jmeno + ", tvé zaměstnání je " + job +".");
*/

/*let firstName = "Nikola"
let age = 30
age = age + 5
console.log ("Ahoj " + firstName + ", je mi " + age + " let.")
console.log ("Za pět let mi bude " +  age + ".");
*/

/*
//maximální počet bodů
let maxPoints = 100


// Počet dosažených bodů
let student1 = 80
let student2 = 50


// Jména studentů
let studentName1 = "Nikola"
let studentName2 = "Petr"



// Výpočet úspěšnosti v procentech, maximální počet bodů je 100
let result1 = (student1 / maxPoints) * 100;
let result2 = (student2 / maxPoints) * 100;

// Výsledky testů
console.log("Student " + studentName1 + " získal " + student1 + " bodů, " + "což v procentech znamená úspěšnost " + result1 + "%.");
console.log("Student " + studentName2 + " získal " + student2 + " bodů, " + "což v procentech znamená úspěšnost " + result2 + "%.");
*/


// CVIČENÍ PROMĚNNÉ VĚK

/*
//Definování věku
let age= 30
// Dítě
let child=age<18
// Dospělý
let adult=age>18
// Důchodce
let pensist=age>65

// Výpis výsledků
console.log("Dítě: " + child);
console.log("Dospělý: " + adult);
console.log("Důchodce: " + pensist);
*/


// objekty a vypsáíní objektů, funkce get displayName a Return

// let author = {
//     id: 2,
//     name: "Nikola",
//     username: "NikolaUser",
//     email: "stepanovanikola25@gmail.com",
//     phone: "605-315-082",

//     get displayName() {
//         return `${this.name} (${this.email})`;
//     }
// };

// console.log(author.displayName)



// const str = "Life, the universe and everything. Answer:";

// console.log(`${str} ${str.length}`);
// // Expected output: "Life, the universe and everything. Answer: 42"
// console.log(str.charAt(0)); // L

// let employees = ["David", "Jana", "Petr"]
// crossOriginIsolated.log(employees.indexOf("David"))


// let books = [{
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }, {
//     title: "Harry Potter a vězeň z Azkabanu",
//     author: "J. K. Rowlingová",
//     published: 1999
// }, {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }]



// // let names = ["Anna", "Cecilie", "Barbora"]
// // console.log(names)
// // names.sort()
// // console.log(names)

// // let numbers = [1, 5, 3, 2, 15, 4]
// // console.log(numbers)
// // numbers.sort()
// // console.log(numbers)

// // řazení pole objektů
// let sortArray = function(arrayBooks){
//   arrayBooks.sort(function(a, b){
//     if(a.title.toLowerCase() < b.title.toLowerCase()){
//         return -1
//     } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
//         return 1
//     } else {
//         return 0
//     }
//   })
// }
// sortArray(books)
// console.log(books)


// // Vyberte pomocí querySelectoru nadpis h1 a vypiště do konzole
// let paragraph = document.querySelector("h1")
// console.log(paragraph)

// // Vyberte pomocí querySelectoru odstavec s idečkem test2 a vypište do konzole
// let paragraph2 = document.querySelector("#test2")
// console.log(paragraph2)

// // Vyberte pomocí querySelectoruALL  oba odstavce s třídou test1 a oba vypište do konzole (každfý zvlášť)
// let paragraph3 = document.querySelectorAll("h2")
// console.log(paragraph3[0])
// console.log(paragraph3[1])

// // Vyberte pomocí querySelectorAll oba odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// //document.addEventListener('DOMContentLoaded', function() {
// 	let paragraphs4 = document.querySelectorAll(".test1")
// 	console.log(paragraphs4[0])
// 	console.log(paragraphs4[1])
// //})


// // Vyberte pomocí getElementsByClassName odstavce s třídou test1 a oba vypište do konzole (každý zvlášť)
// let Otherparagraphs5 = document.getElementsByClassName("test1")
// console.log(Otherparagraphs5[0])
// console.log(Otherparagraphs5[1])

// // Vyberte pomocí getElementById odstavec s idéčkem test2 a vypište do konzole
// let myIdparagraphs6 = document.getElementById("test2")
// console.log(myIdparagraphs6)

// let paragraphs = document.querySelectorAll("p")
// paragraphs.forEach(function(oneParagraph){
// //    console.log(oneParagraph)
//     console.log(oneParagraph.textContent)
//     oneParagraph.textContent = "Ahoj světe!"
//     console.log(oneParagraph.textContent)
// })

// let paragraphs = document.querySelectorAll("p")
// console.log(paragraphs.textContent)

// // Odstranění odstavců, které obsahují slovo "nakrmit"
// let paragraphs1 = document.querySelectorAll("p")
// paragraphs1.forEach(function(oneParagraph){
//     if(oneParagraph.textContent.toLowerCase().includes("nakrmit"))
//         oneParagraph.remove()

// })

// const newParagraph = document.createElement("p")
// newParagraph.textContent = "Text do nového odstavce"
// document.querySelector("header").appendChild(newParagraph)

// const newDiv = document.createElement("div")
// document.querySelector("header").appendChild(newDiv)

// const secondParagraph = document.createElement("p")
// secondParagraph.textContent = "Testovací text do divu"
// newDiv.appendChild(secondParagraph)

// secondParagraph.append("Nový text")
// secondParagraph.prepend("Starý text")

// const newSpan = document.createElement("span")
// newSpan.textContent = "Nový span"
// secondParagraph.prepend(newSpan)

// const newSpan2 = document.createElement("span")
// newSpan2.textContent = "Nový span 2"
// secondParagraph.appendChild(newSpan2)

// const nnewParagraph = document.querySelector("p")
// newParagraph.textContent = "Ahoj vše, co na to právě koukáte..."
// const newDiv2 = document.createElement("div")
// newDiv2.textContent = "Nový div"
// document.querySelector("header").appendChild(newDiv2)


// document.querySelector("a").addEventListener("click", function(event){

//     event.target.textContent = "Bylo kliknuto"

// })

// document.querySelector("h1").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na další nadpis"
// });
// document.querySelector("h2").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na další nadpis"
// });
// document.querySelector("h3").addEventListener("click", function(event){
//     event.target.textContent = "Klikni na další nadpis"
// });


// let criminals = [{
//     firstName: "Martin",
//     secondName: "Zelený",
//     birth: 1985,
//     licencePlate: "85C3322",
//     address: "U sloupů 16",
//     city: "České Budějovice"
// }, {
//     firstName: "Jana",
//     secondName: "Růžová",
//     birth: 1996,
//     licencePlate: "93K3922",
//     address: "Malská 29",
//     city: "České Budějovice"
// }, {
//     firstName: "Anna",
//     secondName: "Modrá",
//     birth: 1989,
//     licencePlate: "2EP6328",
//     address: "Stevardská 38",
//     city: "České Budějovice"
// }]


// // Uložíme data z políčka
// let filters = {
//     searchText: ""
// }

// // Filtr
// const renderCriminals = function(ourCriminals, tryToFind){
//     let arrayResult = ourCriminals.filter(function(oneSuspect){
//         return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
//     })

//     console.log(arrayResult)

//     document.querySelector("#idCriminal").innnerHTML =""

//     arrayResult.forEach(function(oneSuspect){
//         let paragraph = document.createElement("p")
//         paragraph.textContent = `Jméno: ${oneSuspect.firstName}, Příjmení: ${oneSuspect.secondName}`
//         document.querySelector("#idCriminal").appendChild(paragraph)
//     })

// // Načítáme data z políčka
// let licencePlate = document.querySelector("#licence-plate")

// licencePlate.addEventListener("input", function(event){
//     filters.searchText = event.target.value
//     renderCriminals(criminals, filters)
// })
// }


// odychtíme si selector formuláře a přidáme tzv.posluchač, odchytávač události = submit
// při odeslání formuláře se spustí funkce, která zpracuje data
// // a přidá je do HTML
// document.querySelector("#test-form").addEventListener("submit", function(event){
//     // vypneme výchozí chování formuláře
//     event.preventDefault()
//      console.log(event)

// // načtení hodnot z políček
// let firstName = event.target.elements.firstName.value
// let secondName = event.target.elements.secondName.value
// let email = event.target.elements.email.value

//      // vytvoříme odstavec a přidáme do něj text z políčka
//     let paragraph = document.createElement("p")
//     paragraph.innerHTML = `Jméno: <br>${firstName}</br>Příjmení: <br>${secondName}</br>, Email: <br>${email}</br>`

//     // přidáme odstavec do formuláře, do divu s id from-form
//     document.querySelector("#from-form").appendChild(paragraph)

//     // po odeslání vymažeme obsah políčka
//     event.target.elements.firstName.value = ""
//     event.target.elements.secondName.value = ""
//     event.target.elements.email.value = ""
     
// })


// // Přidání položky
// localStorage.setItem("location", "České Budějovice");
// localStorage.setItem("firstName", "Nikola");

// // Upadte položky
// localStorage.setItem("firstName", "Anna");

// // Získání položky
// console.log(localStorage.getItem("location"))
// console.log(localStorage.getItem("firstName"))

// // Smazání položky
// localStorage.removeItem("location")
// localStorage.removeItem("firstName")
// localStorage.clear()
// // Smazání všech položek


// let user = {
//     firstName: "Nikola",
//     age: 27
// }

// let userJSON = JSON.stringify(user)
// localStorage.setItem("user", userJSON)

// let userFromLS = localStorage.getItem("user")
// let myUser = JSON.parse(userFromLS)

// console.log(`Ahoj, já jsem ${myUser.firstName} a je mi ${myUser.age} let`)

// if(localStorage.getItem("users") == null){
//     var myArray = []
//     } else {
//         myArray = JSON.parse(localStorage.getItem("users"))
//     }


// let myForm = document.querySelector("#test-form")
// myForm.addEventListener("submit", function(event){
//     event.preventDefault()
//     console.log(event)

//     myArray.push(event.target.elements.firstName.value)
//     let myArrayToLS = JSON.stringify(myArray)
//     localStorage.setItem("users", myArrayToLS)

//    event.target.elements.firstName.value = ""

//    let myArrayFromLS = localStorage.getItem("users")
//    let myArrayFromLSj = JSON.parse(myArrayFromLS)

//    let paragraph = document.createElement("p")
//    paragraph.textContent = myArrayFromLSj[myArrayFromLSj.length - 1]
//    document.querySelector("#my-users").appendChild(paragraph)

    

// })

// let myPresentArray = localStorage.getItem("users")
// let myPresentArrayJ = JSON.parse(myPresentArray)

// if(myPresentArrayJ != null){
//     myPresentArrayJ.forEach(function(oneUser){
//     let paragraph = document.createElement("p")
//     paragraph.textContent = oneUser
//     document.querySelector("#my-users").appendChild(paragraph)
// })

// }

///////////////////////////////////////////////////






// Přidání položky do LocalStorage a zobrazení formuláře
// Uložení zločinců do LocalStorage a jejich zobrazení na stránce

let myForm = document.querySelector("#test-form")

if(localStorage.getItem("criminals") == null){
    var myArray = []
} else {
    myArray = JSON.parse(localStorage.getItem("criminals"))
}


myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value,
        secondName: event.target.elements.secondName.value,
        crime: event.target.elements.crime.value
    })

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("criminals", myArrayJSON)
})


// odeslání formuláře
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    myArray.push({
        id: "",
        firstName: event.target.elements.firstName.value,
        secondName: event.target.elements.secondName.value,
        crime: event.target.elements.crime.value
    })

    event.target.elements.firstName.value = ""
    event.target.elements.secondName.value = ""
    event.target.elements.crime.value = ""

    myArrayJSON = JSON.stringify(myArray)
    localStorage.setItem("criminals", myArrayJSON)
})

// vypisování zpět do stránky
let toList = document.querySelector(".to-list");

// vypisování zpět do stránky
toList.addEventListener("click", function(){
    if(localStorage.getItem("criminals") == null){
        let paragraph = document.createElement("p")
        paragraph.textContent = "Databáze zločinců je prázdná"
        document.querySelector(".list-criminals").appendChild(paragraph)
    } else {
        let myStorage = localStorage.getItem("criminals")
        let myStorageJSON = JSON.parse(myStorage)
    
        document.querySelector(".list-criminals").innerHTML = ""
    
        myStorageJSON.forEach(function(oneCriminal){
            let paragraph = document.createElement("p")
    
            paragraph.innerHTML = 
                `Jméno: ${oneCriminal.firstName},<br>
                Příjmení: ${oneCriminal.secondName},<br>
                Zločin: ${oneCriminal.crime}`
    
            paragraph.classList.add("basic-styles")
    
            document.querySelector(".list-criminals").appendChild(paragraph)
        }) 
    }    
})



// filtrování
let nameFilter = document.querySelector(".name-filter")
let myStorage = localStorage.getItem("criminals")
let myStorageJSON = JSON.parse(myStorage)

nameFilter.addEventListener("input", function(event){
    let whatWeSearch = event.target.value

    let ourResults = myStorageJSON.filter(function(oneCriminal){
       return oneCriminal.firstName.toLowerCase().includes(whatWeSearch.toLowerCase())
    })

    document.querySelector(".filter-name").innerHTML = ""

    document.querySelector(".filter-name").innerHTML = ""
    document.querySelector(".list-criminals").innerHTML = ""

    ourResults.forEach(function(oneCriminal){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = `Jméno: ${oneCriminal.firstName},<br>
                              Příjmení: ${oneCriminal.secondName},<br>
                              Zločin: ${oneCriminal.crime}`
        document.querySelector(".filter-name").appendChild(paragraph)
    })
})
