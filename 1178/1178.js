/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */

var findNumOfValidWords = function(words, puzzles) {
    var result = [];
    
    const map = words.reduce((map, word) => addToMap(map, getBitmask(word)), new Map());
    
    for(var i = 0; i < puzzles.length; i++){
        var first = getBitmask(puzzles[i][0]);
        var count = map.has(first) ? map.get(first) : 0;
        var mask = getBitmask(puzzles[i].substring(1));
        for (var submask = mask; submask > 0; submask = (submask - 1) & mask) {
            count += map.has(submask | first) ? map.get(submask | first) : 0;
        }
        
        result.push(count);
    }
    
    return result;
};

function getBit(char){
    return 1 << char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function getBitmask(word){
    return word.split('').reduce((acc, char) => acc | getBit(char), 0);
}

var addToMap = (map, val) => map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1)
