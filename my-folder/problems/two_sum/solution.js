/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let tempNum = nums[i] + nums[j];
            if (tempNum === target) {
                const answer = [i, j];
                return answer;
            }
        }
    }
};