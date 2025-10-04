// loops 2 array+loops|

// function to search the element in the array and returnt the index of the element  in the array if not found return -1

function FindElement(num,arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === num) {
            return i
        }
        
    }
    return -1
}
let num = 23545342432
let arr=[12,213423,213,123,123,1]
let result = FindElement(num,arr)

console.log(result)


// write the function that counts the nuber of negative numbers in the array

function countNegatives(arr) {
    let count=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < 0) {
            count+=1
        }
    }
    return count
}
let b= [1,-2,-3,32,-4]
let resulte = countNegatives(b)
console.log(resulte)

// write function return largets number in array

function findLargest(lar) {
    let largest = -Infinity
    for (let i = 0; i <= lar.length; i++){
        if (lar[i] > largest) {
            largest=lar[i]
        }
    }
    console.log(largest)
}

findLargest([1, 21, 12, 121, 3131])


// samllest number in the array

function smallest(sml) {
    let smallest = Infinity;
    for (let i = 0; i < sml.length; i++){
        if (sml[i] < smallest) {
            smallest=sml[i]
        }
    }
    console.log(smallest)
}
smallest([1,2,32,32,31301,3130,1230,0,-1])