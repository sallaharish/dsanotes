// inorder to the find the second largest number in the aray

function secondLargest(arr) {
    let firstLargest = -Infinity
    let secondLargest = -Infinity
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest
            firstLargest=arr[i]
        }
        else if (arr[i] > secondLargest && arr[i]!=firstLargest) {
            secondLargest=arr[i]
        }
    }
    return secondLargest
}
let arr= [1,2,3,4,8]
let result = secondLargest(arr)
console.log(result)