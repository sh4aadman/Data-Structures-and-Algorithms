// Leetcode - Problem List - Problem 1657

// Intuition - The strings must be the same length, must contain the exact same unique characters, word1 has a 'z' and word2 doesn't, they can never be close, sorted list of frequencies must be identical.

// function closeStrings(word1, word2) {
//   if (word1.length !== word2.length) return false;

//   var getFreq = (word) => {
//     var freq = {};
//     for (var char of word) {
//       freq[char] = (freq[char] || 0) + 1;
//     }
//     return freq;
//   };

//   var freq1 = getFreq(word1);
//   var freq2 = getFreq(word2);

//   var chars1 = Object.keys(freq1);
//   var chars2 = Object.keys(freq2);

//   if (chars1.length !== chars2.length) return false;
//   if (!chars1.every((char) => freq2.hasOwnProperty(char))) return false;

//   var counts1 = Object.values(freq1).sort((a, b) => a - b);
//   var counts2 = Object.values(freq2).sort((a, b) => a - b);

//   return counts1.every((count, index) => count === counts2[index]);
// }

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));

// Time Complexity - O(n) -- O(26log26) -- max alphabet size 26
// Space Complexity - O(n) -- O(26) -- counts for atmost 26 unique characters
// Low level approach is more performance optimized, as it uses Uint32Array, bitmasks, and basic math operations to compare counts. (No garbage collection, Direct indexing)

function closeStrings(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    if (m !== n) return false;
    var freq1 = new Array(26).fill(0);
    var freq2 = new Array(26).fill(0);
    for (var i = 0; i < m; i++) {
        freq1[word1.charCodeAt(i) - 97]++;
        freq2[word2.charCodeAt(i) - 97]++;
    }
    for (var i = 0; i < 26; i++) {
        if (freq1[i] === 0 && freq2[i] !== 0 || freq1[i] !== 0 && freq2[i] === 0) return false;
    }
    freq1.sort((a, b) => a - b);
    freq2.sort((a, b) => a - b);
    for (var i = 0; i < 26; i++) {
        if (freq1[i] !== freq2[i]) return false;
    }
    return true;
}