//  let heading = document.querySelector('h1');


// // heading.addEventListener("mouseenter", function(event) {
// //     heading.style.color = 'blue'
// // })

// // heading.addEventListener("mouseleave", function(event) {
// //     heading.style.color = 'black'
// // })

// // heading.style.fontSize = "50px"

// // heading.style.display = "none";

// heading.style.fontWeight = 600

let myDiv = document.querySelector(".square")

// // Nastavení počáteční pozice
// myDiv.style.position = "relative"
// myDiv.style.left = "50px"
// myDiv.style.top = "50px"

// // Inicializace proměnných pro pozici
// let newLeft = 50
// let newTop = 50

// document.querySelector("body").addEventListener("keydown", function(event){
//     if(event.key === "ArrowLeft"){
//         newLeft = newLeft - 10
//         myDiv.style.left = newLeft + "px"
//     } else if (event.key === "ArrowRight"){
//         newLeft = newLeft + 10
//         myDiv.style.left = newLeft + "px"
//     } else if (event.key === "ArrowUp"){
//         newTop = newTop - 10  // Opraveno: pohyb nahoru znamená snížení hodnoty
//         myDiv.style.top = newTop + "px"
//     } else if (event.key === "ArrowDown"){
//         newTop = newTop + 10  // Opraveno: pohyb dolů znamená zvýšení hodnoty
//         myDiv.style.top = newTop + "px"
//     }
// })

// let heading = document.querySelector("h1")
// let style = getComputedStyle(heading)
// console.log(style.color) // Získání barvy textu

// let myForm = document.querySelector("#my-form")
// let myBody = document.querySelector("body")

// myForm.addEventListener("submit", function(event) {
//     event.preventDefault() // Zabrání odeslání formuláře
//   let inputColor = event.target.elements.color.value // Získání hodnoty z pole s názvem "color"

//   myBody.style.backgroundColor = inputColor // Nastavení barvy pozadí těla dokumentu

//   event.target.elements.color.value = "" // Vyprázdnění pole po odeslání
//   console.log("Barva pozadí nastavena na:", inputColor) // Výpis do konzole pro kontrolu

// })


// window.addEventListener("scroll", function(event) {
//     let scrolled = window.scrollY
//     let scrollable = document.documentElement.scrollHeight - window.innerHeight // Výška dokumentu minus výška okna
// })

// 	window.addEventListener("scroll", function(){
// 	    let scrolled = window.scrollY
// 	    let scrollable = document.documentElement.scrollHeight - window.innerHeight
// 	    // Tlačítko Nahoru se objeví, když dojedeme na konec stránky


// 	    // if(Math.ceil(scrolled) === scrollable){
// 	    //     let toTop = document.querySelector(".top-page")
// 	    //     toTop.style.display = "block"
// 	    //     toTop.addEventListener("click", function(){
// 	    //         toTop.style.display = "none"
// 	    //     })
// 	    // }


       
//         // Tlačítko Nahoru se objeví, když dojedeme na konec stránky
// 	    if(Math.ceil(scrolled) > 300){
// 	        let toTop = document.querySelector(".top-page")
// 	        toTop.style.display = "block"
// 	        toTop.addEventListener("click", function(){
// 	            toTop.style.display = "none"
// 	        })
// 	    }
// })  

let firstItemMenu = document.querySelector(".first-item-menu")
let scrollGoal = document.querySelector(".scroll-goal").offsetTop
// Přidání události kliknutí na první položku menu

firstItemMenu.addEventListener("click", function(){
    window.scrollTo({
        top: scrollGoal,
        behavior: "smooth"
    })
})
