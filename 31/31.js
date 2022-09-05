/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var i = nums.length - 2;
    while (i >= 0 && nums[i + 1] <= nums[i]) i--;
    
    if(i >= 0) {
        var j = nums.length - 1;
        while(nums[j] <= nums[i]) j--;
        swap(nums, i, j);
    }

    reverse(nums, i + 1);
    return nums;
};

function swap(nums, index1, index2){
    var temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}

function reverse(nums, start){
    var i = start, j = nums.length - 1;
    while (i < j){
        swap(nums, i, j);
        i++;
        j--;
    }
}
