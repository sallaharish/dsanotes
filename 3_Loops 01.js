// suppose we need to the task repeatedly we use the for loop

for (let i = 0; i < 20; i++){
    console.log(i*2)
}


// what ever we right in the inside loop it will print continiously <a></a>

for (let i = 0; i < [12, 1231].length; i++){
    console.log("how are you")
}


for (let i = 0; i < 12; i = i += 1){
    console.log(i,"i")
}


for (let i = 0; i <= 10; i += 2){
    console.log(i)
}


for (let i = 5; i > 0; i--){
    console.log(i,"hello")
}

function greet(){
    return "harish"
}
for(let i=0;i<2;i++){
    console.log(greet())
}


let arr =[12,123,1231,231242,34]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// fpr printing the even numbers in the array

let a = [12, 1, 12, 13, 33, 4]
for (let i = 0; i < a.length; i++){
    if (a[i] % 2 == 0) {
        console.log(a[i])
    }
}


// for thr case of the while loo[<p></p>]


let a = 0;
while (a < 5) {
    console.log("hello")
    a++
}