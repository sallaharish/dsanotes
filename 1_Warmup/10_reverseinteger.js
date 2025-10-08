/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // we need to make the copy of the x because we are going to change the value of x
    let xcopy =x;

    // change this numbe to converting the -ve number to positive
    x=Math.abs(x)
  
    let reverse=0;
    // for getting the last digit and making the reverse number
    while(x>0){
        let last = x%10;
        reverse=(reverse*10)+last;
        x=Math.floor(x/10)
    }
    let limit = Math.pow(2,31)
    if(reverse < -limit || reverse>limit){
        return 0
    }
    return (xcopy<0) ? -reverse : reverse
    
};