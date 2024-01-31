console.log("This is strings tutorial")
let a = "Chintu";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let real_name = "Chintu"
let friend = "Harry"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log('His name is ${real_name} and his friends name is ${friend}')
let b = "Shin Chan"
// let newb = b.trim()            Dont know why it isn't working [got it Strings are immutable. Once the charaters are stored it cannot be changed]
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,4))

console.log(b.replace("Sh", "5h"))
console.log(b.concat(a, "Pintu bahi"))