/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = nums.length
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === nums[i - 1]) {
            nums[i] = "_"
            k -= 1
        }
    }
    nums.sort((a, b) => {
        if (a === "_") {
            return 1
        } else if (b === "_") {
            return -1
        } else {
            return 0
        }
    })
    return k
};