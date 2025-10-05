
let num = -112;
function countDigits(num) {
    // change this numbe to converting the -ve number to positive
    num=Math.abs(num)
    let count = 0
    // for handling the number is 0
    if (num == 0) {
        return 1
    }
    while (num > 0) {
        num = Math.floor(num / 10)
        count += 1
    }
    return count;
}
let result = countDigits(num)

console.log(result)