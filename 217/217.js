/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = new Map();
    
    for (let number of nums){
        if (map.has(number))
            return true;
        else
            map.set(number, 0);
            
    }
    
    return false;   
};
