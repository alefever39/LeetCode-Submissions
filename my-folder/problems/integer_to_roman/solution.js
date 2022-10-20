/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let romNum = []
    let onesDig = num % 10
    let tensDig = parseInt((num/10) % 10)
    let hundDig = parseInt((num/100) % 10)
    let thouDig = parseInt((num/1000) % 10)
    // ones place
    if (onesDig === 0){
        romNum.unshift("")
    } else if (onesDig < 4) {
        for (let i = 0; i < onesDig; i++) {
            romNum.unshift("I")
            }
    } else if (onesDig === 4) {
        romNum.unshift("IV")
    } else if (onesDig < 9) {
        for (let i = 0; i < onesDig - 5; i++) {
            romNum.unshift("I")
            }
        romNum.unshift("V")
    } else if (onesDig === 9) {
        romNum.unshift("IX")
    }

    // tens place
    if (tensDig === 0){
        romNum.unshift("")
    } else if (tensDig < 4) {
        for (let i = 0; i < tensDig; i++) {
            romNum.unshift("X")
            }
    } else if (tensDig === 4) {
        romNum.unshift("XL")
    } else if (tensDig < 9) {
        for (let i = 0; i < tensDig - 5; i++) {
            romNum.unshift("X")
            }
        romNum.unshift("L")
    } else if (tensDig === 9) {
        romNum.unshift("XC")
    }

    // hundereds place
    if (hundDig === 0){
        romNum.unshift("")
    } else if (hundDig < 4) {
        for (let i = 0; i < hundDig; i++) {
            romNum.unshift("C")
            }
    } else if (hundDig === 4) {
        romNum.unshift("CD")
    } else if (hundDig < 9) {
        for (let i = 0; i < hundDig - 5; i++) {
            romNum.unshift("C")
            }
        romNum.unshift("D")
    } else if (hundDig === 9) {
        romNum.unshift("CM")
    }

    // thousands place
    if (thouDig === 0){
        romNum.unshift("")
    } else if (thouDig < 4) {
        for (let i = 0; i < thouDig; i++) {
            romNum.unshift("M")
            }
    }

    return romNum.join("")
};