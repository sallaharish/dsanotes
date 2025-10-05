for (let i = 0; i <= 3; i++) {
    let row = ""
    for (let j = 0; j <= 3; j++) {
        row += " * "
    }
    console.log(row)
}

console.log("----------------------------------")
for (let i = 0; i < 4; i++) {
    let row = ""
    for (let j = 0; j <= i; j++) {
        row += " * "
    }
    console.log(row)
}


console.log("--------------");


for (let i = 0; i < 6; i++){
    let row = " "
    for (let j = 0; j < i; j++){
        row += " "+ (j+1)
    }
    console.log(row)
}

console.log("--------------")

for (let i = 1; i < 6; i++) {
    let row = " "
    for (let j = 0; j < i; j++) {
        row += " " + (i )
    }
    console.log(row)
}

console.log("--------------")
for (let i = 0; i < 5; i++) {
    let row = " "
    for (let j = 1; j < 5-i; j++) {
        row += " " + (j)
    }
    console.log(row)
}

console.log("--------------")
for (let i = 0; i < 5; i++) {
    let row = " "
    for (let j = 1; j < 5 - i; j++) {
        row += " " + "*"
    }
    console.log(row)
}

console.log("--------------")
// it was always for the number of rows
for (let i = 0; i < 5; i++) {
    let row = " "
    // adding the empty spaces 
    for (let j = 0; j < 5-(i+1); j++) {
        row += "  " 
    }
    // for printing the "*"
    for (let k = 0; k < (i + 1); k++) {
        row += " "+"*"
    }
    console.log(row)
}

console.log("--------------")

console.log("--------------")
for (let i = 0; i < 6; i++) {
    let row = " "
    let change=1
    for (let j = 1; j < i+1; j++) {
        row += change
        if (change === 1) {
            change=0
        }
        else {
            change=1
        }
    }

    console.log(row)
}

console.log("--------------")
let change = 1
for (let i = 0; i < 6; i++) {
    let row = " "
  
    for (let j = 1; j < i + 1; j++) {
        row += change
        if (change === 1) {
            change = 0
        }
        else {
            change = 1
        }
    }

    console.log(row)
}