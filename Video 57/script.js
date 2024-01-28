console.log("I am a tutorial on loops")

let a = 1;

for (let i = 0; i < 100; i++) {
    console.log(a + i);
}

let obj = {
    name: "Chintu",
    role: "Programmer",
    company: "Chintu nasha wala",
}

    for (const key in obj) {
        console.log(key)
    }

    for (const c of "Chintu") {
        console.log(c)
    }

    // let i = 5;
    // while (i<6) {
    //     console.log(i)
    //     i++;
    // }

    let i = 10; 
    do {
        console.log(i)
        i++;
    } 
    while (i<6);
    