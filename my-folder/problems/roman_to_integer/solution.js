/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let text = s;
    let num = 0;
    const romNum = text.split("");
    let count = 0;
    
    for (const element of romNum) {
        if (element === "I") {
            if (romNum[count + 1] === "V") {
                num = num + 4
            }
            else if (romNum[count + 1] === "X") {
                num = num + 9
            }
            else {
                num = num + 1;
            }
        }
        else if (element === "V") {
            if (romNum[count - 1] === "I") {
                num = num + 0;
            }
            else {
                num = num + 5;
            }
        }
        else if (element === "X") {
            if (romNum[count - 1] === "I") {
                num = num + 0;
            }
            else if (romNum[count + 1] === "L") {
                num = num + 40;
            }
            else if (romNum[count + 1] === "C") {
                num = num + 90;
            }
            else {
                num = num + 10;
            }
        }
        else if (element === "L") {
            if (romNum[count - 1] === "X") {
                num = num + 0;
            }
            else {
                num = num + 50;  
            }
        }
        else if (element === "C") {
            if (romNum[count - 1] === "X") {
                num = num + 0;
            }
            else if (romNum[count + 1] === "D") {
                num = num + 400;
            }
            else if (romNum[count + 1] === "M") {
                num = num + 900;
            }
            else {
                num = num + 100;
            }
        }
        else if (element === "D") {
            if (romNum[count - 1] === "C") {
                num = num + 0;
            }
            else {
                num = num + 500;
            }
        }
        else if (element === "M") {
            if (romNum[count - 1] === "C") {
                num = num + 0;
            }
            else {
                num = num + 1000;
            }
        }
    count = count + 1;
}
return (num);
};