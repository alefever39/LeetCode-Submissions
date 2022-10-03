/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[0] >= target) {
        return 0
    }
    if (nums[nums.length - 1] < target) {
        return nums.length
    }

    let i = Math.ceil(nums.length/2)
    let step = i
    let solFound = false

    while(!solFound) {
        step = Math.ceil(step/2)
        if (nums[i] === target) {
            solFound = true
        }
        else if (nums[i] < target && target < nums[i + 1]) {
            i++
            solFound = true
        }
        else if (nums[i] > target) {
            i = i - step
        }
        else if (nums[i] < target) {
            i = i + step
        }
    }

    return i
};