/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1
    if (digits[i] === 9) {
        do {
            digits[i] = 0
            i--
        } while(digits[i] === 9)
    }
    if (digits[i] === undefined) {
        digits.unshift(1)
    } else {
        digits[i] = digits[i] + 1
    }
    return digits
    // return (parseInt(digits.join("")) + 1).toString().split("").map(numString => parseInt(numString))
};