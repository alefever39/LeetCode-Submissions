/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s === "") {
        return 0;
    } else if (s.length === 1) {
        return 1
    };
    let output = 1;
    let strArr = s.split("");

    for (let i = 0; i < strArr.length; i++) {
        let testArr = [strArr[i]]
        for (let j = i + 1; j < strArr.length; j++) {
            if (testArr.includes(strArr[j])) {
                break
            }
            testArr.push(strArr[j])
            if (testArr.length > output) {
                    output = testArr.length
            }
        }
    }

    return output
};