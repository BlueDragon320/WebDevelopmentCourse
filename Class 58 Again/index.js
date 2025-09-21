function nice(name){
    console.log("Hey " + name + " you are great.");
}

nice("Rony")

function sum(a,b){
    console.log(a+b)
}
sum(4, 5)

function summ(a1 ,b1,c1 = 0){
    return a1 + b1 + c1;
}
result1 = summ(1, 2, 3)
result2 =  summ(1, 2)
console.log(result1)
console.log(result2)


const func1 = (z)=>{
    console.log("I am Man", z);
}
func1(234);