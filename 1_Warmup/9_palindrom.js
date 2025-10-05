// Learn to write code that checks if a given input reads the same forwards and backwards (palindrome). Essential for understanding string and number handling.ar isPalindrome = function(x) {
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   if(x<0) return false;
//    we need to make the copy of the x because we are going to change the value of x
   let xcopy=x;
   let rev=0
   while (x>0){
    // for getting the last digit
    let rem=x%10;
    // for making the reverse number so that we can compare it with the original number and check if its a palindrome or not
    rev=(10*rev)+rem
    x=Math.floor(x/10)
   }
   return rev===xcopy;
};