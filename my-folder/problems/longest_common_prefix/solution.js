/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //split the strings into arrays. create an output array. loop through the arrays in strs, comparing each character with all of the other characters. if all of the characters match, add that character to the output array. if any of the characters do not match, end the loop. after the loop is concluded, if the output array does not contain any elements, then return "". Otherwise return the joined output array.

    if (strs.length === 1) {
        return strs[0]
    }

    let outArr = []
    let testArr = strs.map(str => str.split(""))
    let testStrArr = testArr.shift()
    let exit = false

    while(testStrArr.length > 0 && !exit) {
        let letter = testStrArr.shift()
        let addLetter = false
        testArr.forEach(str => {
            if(!str) {
                addLetter = false
                exit = true
                return
            }
            let testLetter = str.shift()
            if (letter === testLetter && exit === false) {
                addLetter = true
                return
            } else {
                addLetter = false
                exit = true
                return
            }
        })
        if (addLetter === true) {
            outArr.push(letter)
        }
    }

    return outArr.join("")
};