function sum(a,b){
    // console.log(a+b)
    return a + b
}
// sum(3,5)

result1 = sum(6,9)
result2 = sum(9,6)

console.log("The sum of these numbers is : ", result1)
console.log("The sum of these numbers is : ", result2)

const func1 = (x) => {
    console.log("I am an arrow function",x)
}
func1(69);
func1(96);