/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let aNums = a.split("").map(str => parseInt(str))
    let bNums = b.split("").map(str => parseInt(str))
    let output = []
    let carryover = 0
    if (aNums[0] === 0 && bNums[0] === 0) {
        return "0"
    }
    while ((aNums[0] !== undefined && bNums[0] !== undefined) || carryover === 1) {
        let sum = carryover
        if (aNums[0]) {
            sum += aNums.pop()
        }
        if (bNums[0]) {
            sum += bNums.pop()
        }
        if (sum > 1) {
            output.unshift(sum % 2)
            carryover = 1
        } else {
            output.unshift(sum)
            carryover = 0
        }
    }
    if (aNums[0]) {
        return aNums.concat(output).join("").toString()
    } else if (bNums[0]) {
        return bNums.concat(output).join("").toString()
    }
    return output.join("").toString()
};