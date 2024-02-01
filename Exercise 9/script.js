let random = Math.random()
let a = prompt("Enter the first number")
let b = prompt("Enter the secound number")
let c = prompt("Enter the operation")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random>0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}

else {
    c = obj[ca]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}