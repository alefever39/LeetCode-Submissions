/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const stringArray = s.split(" ").filter(string => string !== "")
    return stringArray[stringArray.length - 1].length
};