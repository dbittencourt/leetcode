/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var response = [];
    var sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);
    
    for (let interval of sortedIntervals){
        if (response.length === 0 || response[response.length - 1][1] < interval[0])
            response.push(interval);
        else{
            response[response.length -1][1] = response[response.length -1][1] > interval[1] 
                ? response[response.length -1][1]
                : interval[1];
        }
            
    }
    
    return response;
};
