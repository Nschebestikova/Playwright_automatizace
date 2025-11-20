
// Aplikace na regulaci teploty
/*
let temperature =  10 // aktuální teplota

if (temperature <= 10){
    console.log ("Je chladno")
} else if (temperature >= 11 && temperature <= 25){
    console.log("Je teplo.")
    
} else {
    console.log("Je horko.")
}
*/

/*
let temperature = 10 

if (temperature <= 10 ) {
    console.log ("Je chladno")
} else if (temperature >= 11 || temperature <= 25) {
    console.log("Je teplo.")
} else {
    console.log("Je horko.")

}
*/

// SCOPE - ROZSAH
// Globální scope (prvni)
// Lokální scope (druha)
/*
let  prvni = "Ahoj"

if(true){
    console.log(prvni)
    let druha = "Čus"
    console.log(druha)

    if(true){
        let treti = "Bus"
        console.log(treti)
        console.log(druha)
        console.log(prvni)
    }
}
*/

/*
// Funkce a argumenty
let naDruhou = function(num){
    console.log(num * num)
}

naDruhou(5)
naDruhou(3)
naDruhou(8)

let zdraviciFunkce = function(name){
    console.log("Ahoj, já jsem " + name)
}

zdraviciFunkce("David")
zdraviciFunkce("Jana")
zdraviciFunkce("Hermiona")
*/


/*
// šipková notace
let naDruhou = (num) => console.log(num * num)
naDruhou(5)
naDruhou(2)
naDruhou(8)
*/


/*
// funkce - adultChecker
let adultChecker = function(age) {
    if (age >= 18) {
        let result = "dospělý"
        return result
    } else {
       let result = "dítě"
       return result
    }
}

let value = adultChecker(25)

if (value === "dospělý"){
    console.log("Výsledek kontroly je: dospělý")
    console.log("Mlůžeš vstoupit.")
} else {
    console.log("Výsledek kontroly je: dítě")
    console.log("Nemůže vstoupit.")
}
*/


//ÚkolNa dveřích do kanceláře je tlačítkový display. Aby se dveře otevřeli, tak musíte zadat správný třímístný kód. Tento kód jste si navolili, když jste do práce nastupovali. Uložte vámi zvolený kód do tří proměnných. Poté vytvořte funkci, která bude přijímat tři parametry. Pokud se budou shodovat se zvoleným kódem, tak se do console vypíše "Můžete vstoupit". Pokud se nebudou shodovat, tak se vypíše text "Špatně zadaný kód. Zkuste to prosím znovu."

// let num1 = 1
// let num2 = 3
// let num3 = 5

// let codeChecker = function(num1, num2, num3){
// if (num1 === 1 && num2 === 3 && num3 === 5){
//     console.log("Je to ok, můžete vstoupit.")
// } else {
//     console.log ("Špatně zadný kód, zkuste zadat znovu.")
// }
// }

// codeChecker(1, 3, 5)
// codeChecker(2, 4, 6)
// codeChecker(6, 2, 3)


// // Template Strings
// let myName = "Harry Potter"
// let age = 15
// console.log("Ahoj, já jsem " + myName + " a je mi " + age + " let.")
// console.log(`Ahoj, já jsem ${myName} a je mi ${age} let.`)

// CVIČENÍ - ZÁPIS POMOCÍ TEMPLATE STRINGS
// let firstName = "Harry"
// let secondName = "Potter"
// let age = 15
// let firstFriend = "Ron"
// let secondFriend = "Hermiona"

// console.log(`Ahoj, jmenuji se, ${firstName} ${secondName} a je mi ${age} let. Moji přátelé jsou ${firstFriend} a ${secondFriend}.`)

/*
Opište si výše uvedené proměnné a vaším úkolem je vypsat větu "Ahoj, jmenuji se Harry Potter a je mi 15 let. Moji přátelé jsou Ron a Hermiona" pomocí template string

s (viz předchozí video)
*/

// let movie = "Ospalá díra"
// let director = "Tim Burton"
// let award = "nejlepší výkon ve výpravě"

// console.log(`Viděl jsem film ${movie}, který režíroval ${director}. Tento film získal ocenění ${award}`)

// /*
// Z tří výše uvedených proměnných sestavte pomocí template strings větu "Viděl jsem film Ospalá díra, který režíroval Tim Burton. Tento film získal ocenění nejlepší výkon ve výpravě."
// */

// let myBook = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }
// // console.log(myBook)

// // výpis jednotlivých vlastností
// console.log(myBook.title)
// console.log(myBook.author)
// console.log(myBook.published)

// // výpus všech vlastností najednou
// console.log(`${myBook.title} je kniha od autorky ${myBook.author} a byla vydána v roce ${myBook.published}`)


// // změna vlastností objektu
// myBook.title = "Harry Potter a tajmená komnata"
// myBook.published = 1998

// console.log(`${myBook.title} je kniha od autorky ${myBook.author} a byla vydána v roce ${myBook.published}`)


// Definujte 3 objekty, které budou představovat konkrétní lidi s názvy person1, person2 a person3. Každý objekt (člověk) bude mít jméno, věk a město, ve kterém žije. Údaje jsou zcela na vás, ale person1 budete vždy vy.

// Dokonzole vypište tři věty "Jmenuje se ... . Je mu ... let a pochází z města ... ."

// let person1 = {
//     name: "Nikola",
//     age: 30,
//     city: "Hlučín"
// }

// let person2 = {
//     name: "Petr",
//     age: 25,
//     city: "Ostrava"
// }

// let person3 = {
//     name: "Jana",
//     age: 27,
//     city: "Brno"
// }

// console.log(`Jmenuje se ${person1.name}. Je mu ${person1.age} let a pochází z města ${person1.city}.`)

// console.log(`Jmenuje se ${person2.name}. Je mu ${person2.age} let a pochází z města ${person2.city}`)

// console.log(`Jmenuje se ${person3.name}. Je jí ${person3.age} let a pochází z města ${person3.city} `)

// zjednodušení cyklem for 

// let person1 = {
//     name: 'Kristyna',
//     age: 29,
//     city: 'Cardano Al Campo'
// }
// let person2 = {
//     name: 'Eduardo',
//     age: 30,
//     city: 'Quezatepeque'  
// }
// let person3 = {
//     name: 'Zdenek',
//     age: 58,
//     city: 'Cardano Al Campo' 
// }
// let person = [person1, person2, person3]

// for(let i = 0; i < 3; i++){
//     console.log(`${person[i].name} is ${person[i].age} years old and comes from ${person[i].city}.`)
// }


// let myBook = {
//      title: "Harry Potter a kámen mudrců",
//      author: "J. K. Rowlingová",
//      published: 1997
//      }

// let secondBook = {
//     title: "Harry Potter a tajemná komnata",
//     author: "J.K. Rowlingová",
//     published: 1998
// }

// let resultBook = function(book) {
//     console.log(`${book.title} je kniha od autorky ${book.author} a byla vydána v roce ${book.published}.`)
// }

// resultBook(myBook)
// resultBook(secondBook)

// // MOJE ŘEŠENÍ ÚLOHY
// let person1 = {
//      name: "Nikola",
//      age: 30,
//      city: "Hlučín",
//      Gender: "female"
//  }

//  let person2 = {
//      name: "Petr",
//      age: 25,
//      city: "Ostrava",
//      Gender: "male"
//  }

//  let person3 = {
//      name: "Jana",
//      age: 27,
//      city: "Brno",
//      Gender: "female"
// }

// let resultPerson = function(person){
//     if(person.Gender === "male"){
//         console.log(`Jmenuje se ${person.name} a je mu ${person.age} let a pochází z města ${person.city}`)
//     } else {
//         console.log(`Jmenuje se ${person.name} a je jí ${person.age} let a pochází z města ${person.city}`)
//     }
// }

// resultPerson(person1)
// resultPerson(person2)
// resultPerson(person3)



// // proměnné a objekty
// let firstName = "David"
// let myObject = {
//     firstName: firstName,
//     secondName: "Šetek",
//     age: 34
// }

// console.log(myObject.firstName)

// Objekty a return
// let firstBook = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }

// let secondBook = {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }

// let bookInfo = function(book){
//     return {
//         basicInfo: `${book.title} od ${book.author}`,
//         publishing: `Kniha ${book.title} byla vydána v roce ${book.published}`
//     }
// }

// let result = bookInfo(firstBook)
// console.log(result.basicInfo)
// console.log(result.publishing)

// // výpis bassic Info
// let firstBook = {
//     title: "Harry Potter a kámen mudrců",
//     author: "J. K. Rowlingová",
//     published: 1997
// }

// let secondBook = {
//     title: "Harry Potter a Tajemná komnata",
//     author: "J. K. Rowlingová",
//     published: 1998
// }

//     let bookInfo = function(book){
//         return {
//             basicInfo: `${book.title} od ${book.author}`,
//             publishing: `Kniha ${book.title} byla vydána v roce ${book.published}`
//         }
//     }

//     let result = bookInfo(firstBook)
//     console.log(result)

// OBJEKT S NÁZVEM SCHOOL

// let school = {
//     type: "Gymnazium",
//     street: "Testovací",
//     city: "Ostrava",
//     capacity: 1000,
//         open: function(){
//             return "Škola je otevřená"
//         },
//         closed: function(){
//             return "Škole je zavřená"
//         }
//     }


// console.log(school.type)
// console.log(school.city)
// let result = school.open()
// console.log(result)
// let result2 = school.closed()
// console.log(result2)


// // Vytvořte proměnnou vladniNarizeni. Přiřaďte do ní hodnotu true nebo false. True znamená, že vládní nařízení platí. False, že vládní nařízení neplatí. 
// Vytvořte objekt school s type, street, city, capacity a dvěma metodami open a closed. Open bude vypisovat např. "Škola Gymnázium Tábor je otevřená". Closed to samé, ale že je zavřená. Typ a city do věty dosadíte pomocí this.
// Vytvoříte podmínku, že pokud jsou nařízení true, tak se zavolá funkce closed. Pokud false, tak se zavolá funkce open.

// let vladniNarizeni = true
// let school = {
//     type: "Gymnazium",
//      street: "Testovací",
//     city: "Ostrava",
//     capacity: 1000,
//     open: function(){
//         console.log(`Škola ${this.type} ${this.city} je otevřená`)
//     },
//     closed: function(){
//         console.log(`Škola ${this.type} ${this.city} je zavřená`)
//     }
// }
// if(vladniNarizeni){
//     school.closed()
// } else{
//     school.open()
// }
 


/*
let firstName =  "David"

// délka
console.log(firstName.length)

//velká písmena
console.log(firstName.toUpperCase())

// malá písmena
console.log(firstName.toLowerCase())

// Zahrnuje
let sentence = "David se učí JavasScript"
let word = "učí"
console.log(sentence.includes(word))

// odstranění bílých mezer
let secondName = "Šetek"
console.log(secondName.trim())
*/

// // do proměnné password - heslo libovolné
// let password = "adm12345"
// if (password.length > 13) {
//     console.log("Velmi silné heslo")
// } else if (password.length >= 8 && password.length <= 13) {
//     console.log("Silné heslo" )

// } else {
//     console.log("Heslo není dostatečně silné")
// }

// // obsahuje číslo 1234
// if(password.includes("1234")){
//     console.log ("Heslo obsahuje číslo 1234")
// } else {
//     console.log("Heslo neobsahuje číslo 1234")
// }

// let number = 3.94533

// console.log(number.toFixed(3)) // zaokrouhlení na 3 desetinná místa

// // zaokrouhlování na ce čísla
// console.log(Math.round(number)) // zaokrouhlení na celé číslo
// console.log(Math.floor(number)) // zaoukrouhlení dolů
// console.log(Math.ceil(number)) // zaokrouhlení nahoru, ke stropu TZV. ceiling
// náhodné číslo
// console.log(Math.random()) //náhodné číslo mezi 0 a 1
// console.log(Math.random())  //náhodné číslo mezi 0 a 100
// console.log(Math.floor(Math.random() * 10)) //náhodné číslo mezi 0 a 10
// console.log(Math.floor(Math.random() * 100)) //náhodné číslo mezi 0 a 10


// //náhodné číslo mezi 1 až 10 ale zaokrouhlené vždy nahoru
// console.log(Math.ceil(Math.random() * 10))

// // náhodné číslo z intervalu
// let min = 15
// let max = 20
// console.log(Math.floor(Math.random() * (max - min + 1) ) + min)
// console.log(Math.floor(Math.random() * (max - min + 1) ) + min)
// console.log(Math.floor(Math.random() * (max - min + 1) ) + min)




// Vytvořte 6 proměnných number1 až number6. Do každé proměnné uložíte výsledek hodu kostkou - tedy číslo od 1 do 6. Poté do proměnné sum všech 6 čísel nasčítáte a pokud je součet větší nebo rovno 25, tak vypíšete "Vítěz". Pokud menší, tak "Zkus znovu své štěstí". Na vhodném místě také do konzole vypíšete celkový součet všech 6 čísel.
 
// let number1 = (Math.random() * 6  + 1)
// let number2 = (Math.random() * 6  + 1)
// let number3 = (Math.random() * 6  + 1)
// let number4 = (Math.random() * 6  + 1)
// let number5 = (Math.random() * 6  + 1)
// let number6 = (Math.random() * 6  + 1)
// let sum = number1 + number2 + number3 + number4 + number5 + number6

// console.log(`Součet je: ${sum}`) 
// if (sum >= 25) {
//     console.log("Vítěz")
// } else {
//     console.log("Zkus znovu své štěstí")
// }


// console.log("%c tento text je barevný", "color: #5118a9; font-weight: bold")

// console.log("Ahoj")


//Vytvořte proměnnou passwords (pole) a uložte do ní tři stringy - texty (i text může mít v sobě čísla). Vaším úkolem je náhodně vybrat jedno heslo. Při každém znovunačtení stránky se do konzole vypíše jedno ze tří hesel (náhodně).

// let passwords = ["123456", "abcdefg", "pass0140"]
// let randomIndex = Math.floor(Math.random() * passwords.length)
// console.log(passwords[randomIndex])

// blbnutí, výzva s promptem

// let firstName = prompt("Zadej jméno")
// console.log(firstName)

// let myArray = []

