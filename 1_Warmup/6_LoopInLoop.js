// How single loop works

for (let i = 0; i < 5; i++){
    console.log(i)
}

for (let i = 0; i < 2; i++){
    for (let j = 0; j < 3; j++){
        console.log(i,j)
    }
}

// for changing the values in the for loop
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < i; j++) {
        console.log(i, j)
    }
}
// in this case inside loop not run for the first time again it will run after that <a>
for (let i = 0; i < 2; i++) {
    for (let j = 0; j <= i; j++) {
        console.log(i, j)
    }
}