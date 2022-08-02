/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x >= -2^31 && x <= 2^31 - 1){
        let convertedStr = x.toString();
        let reverseStr = convertedStr.split("").reverse().join("");
        return reverseStr === convertedStr ? true : false
    }
}


