// time complexity: O(b) 
// space complexity: O(b) 

// Should confirm case-sensetive
// Should confirm spaces
// Can assume that the two strings have matching sizes

// Solution:
// Sort both and linear search on the longest one with static sliding window
// time complexity: O(a*loga + b*logb) 
// space complexity: O(1) 
// Linear search using extra data structure
// time complexity: O(b) 
// space complexity: O(b) 

export function isPermutation(a, b) {
    const longerArr = a.length > b.length ? a : b;
    const shortArr = a.length <= b.length ? a : b;

    const comparisonArr = new Array(128);
    for (let i = 0; i < longerArr.length; i++) {
        const longArrCurrentChar = longerArr.charCodeAt(i);
        const shortArrCurrentChar = shortArr.charCodeAt(i);
        if (longArrCurrentChar) {
        if (longArrCurrentChar == undefined) comparisonArr[longArrCurrentChar] = 0;
        comparisonArr[longArrCurrentChar]+= 1;
        }
        if (shortArrCurrentChar) {
        if (comparisonArr[shortArrCurrentChar] == undefined) comparisonArr[shortArrCurrentChar] = 0;
        comparisonArr[shortArrCurrentChar]-= 1;
        }
    }

    for (let i = 0; i < comparisonArr.length; i++) {
        if (comparisonArr[i] < 0) {
        return false;
        }
    }

    return true;
}