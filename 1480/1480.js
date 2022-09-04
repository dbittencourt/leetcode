/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var response = [nums[0]];
    for (var i = 1; i < nums.length; i++){
        response.push(response[i -1] + nums[i]);
    }
    
    return response;
};
