class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if (complement in map) {
                return [i, map[complement]];
            }
            else {
                map[nums[i]] = i;
            }
        }
    }
}
