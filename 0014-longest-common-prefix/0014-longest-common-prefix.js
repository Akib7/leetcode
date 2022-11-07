/**
 * @param {string[]} strs
 * @return {string}
 */




var longestCommonPrefix = function(strs) {
    
    if(!strs || strs.length === 0) return "";
    
    var shortestArr = strs.sort((a,b) => a.length - b.length)
    
    var shortestStr = shortestArr[0];
    
    while(!strs.every((str) => str.startsWith(shortestStr))){
        if(shortestStr.length === 0) return; 
        shortestStr = shortestStr.slice(0,-1)
    }
    return shortestStr;
};

