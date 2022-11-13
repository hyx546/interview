/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const num = nums.length / 2;
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let count = 1;

        if (map.has(nums[i])) {
            count += map.get(nums[i]);
        }
        console.log(count);
        if (count > num) {
            return nums[i];
        }
        map.set(nums[i], count);
    }
};

console.log(majorityElement([3, 2, 3]));