/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var map = new Map();
    var result = [];
    for(let word of strs){
        var sortedWord = word.split('').sort().toString();
        var anagrams = map.has(sortedWord) ? map.get(sortedWord) : [];
        anagrams.push(word);
        map.set(sortedWord, anagrams);
    }
    
    for(let sortedWord of map.keys()){
        result.push(map.get(sortedWord));
    }
    
    return result;
};
