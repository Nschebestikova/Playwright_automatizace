let nameID = location.hash.substring(1)
let names = getSavedNames()


let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID
})


if(searchedName === undefined){
    location.assign("/index.html")
}



document.querySelector("#editedName").value = searchedName.firstName


let changingForm = document.querySelector("#changing-form")
changingForm.addEventListener("submit", function(event){
    event.preventDefault()


    searchedName.firstName = event.target.elements.changingName.value


    saveNames(names)
})



// window.addEventListener("click", function(){
//     console.log("Bylo kliknuto")
// })
window.addEventListener("storage", function(event){
    console.log(event)


    if(event.key === "names"){
        names = JSON.parse(event.newValue)
    }


    let searchedName = names.find(function(oneObject){
        return oneObject.id === nameID
    })
    
    if(searchedName === undefined){
        location.assign("/index.html")
    }
    
    document.querySelector("#editedName").value = searchedName.firstName
})


window.addEventListener("storage", function(){
    location.reload()
})



// const square = (num) => {
//     return num * num
// }

console.log(square(5)) // 25

const square = (num) => {
    return num + num
}

console.log(square(5)) // 10

const square = (num1, num2)  => num1 + num2

const diff = (num1, num2) => num1 - num2
console.log(diff(5, 4)) // 1