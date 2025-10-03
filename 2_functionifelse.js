function printHelloWorld() {
    console.log("harish salla")
}

printHelloWorld()


// the code will be only be execeutd when we call the function 


function greet(val) {
    console.log("hello"+val)
}

greet("harish")


// for adding the two numbers <a</a >


function add(a, b) {
        console.log(a+b)
}
add(12, 23)


// function for thr returning the value from the function <a></a >



function giveaway(val)

{
    return val
}

console.log(giveaway("hello"))


// checking for the age aglibility function over <input</input >


function egligible(age) {
    if (age > 18) {
        console.log("egligible")
    }
    else if (age <= 0) {
        console.log("envalid age")
    }
    else {
        console.log("not egligibel")
    }
}

egligible(0)


// for checking the number is even or odd

function numberCheck(num) {
    if (num % 2 === 0) {
        console.log("even number")
    }
    else {
        console.log("odd number")
    }
}

numberCheck(1)