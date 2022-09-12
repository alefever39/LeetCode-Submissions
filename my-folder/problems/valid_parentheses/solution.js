/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false
    const storageArray = []
    const openingArray = ['(', '{', '[']
    const closingArray = [')', '}', ']']
    let isPassing = true
    
    s.split('').forEach(element => {
        if (openingArray.includes(element)) {
            storageArray.push(element);
        } else if (storageArray.length !== 0) {
            const lastOpening = storageArray.pop()
            if (openingArray.indexOf(lastOpening) !== closingArray.indexOf(element)){
                isPassing = false
                return
            }
        } else {
            isPassing = false
            return
        }
    })
    return storageArray.length === 0 && isPassing
};
