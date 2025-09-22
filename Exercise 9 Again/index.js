/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It performs wrong operations as folow:
+ --- > -
* --- > +
- --- > /
/ --- > **

It performs wrong operations 10% of the times. */

r = Math.random()
console.log(r)
let a = Number(prompt("Enter the value of A: "))
let b = Number(prompt("Enter the value of B: ")) 

if (r <= 0.1){
    console.log(a, " + ", b, " = ", a - b);
    console.log(a, " * ", b, " = ", a + b);
    console.log(a, " - ", b, " = ", a / b);
    console.log(a, " / ", b, " = ", a ** b);
}
else {
    console.log(a, " + ", b, " = ", a + b);
    console.log(a, " * ", b, " = ", a * b);
    console.log(a, " - ", b, " = ", a - b);
    console.log(a, " / ", b, " = ", a / b);
}