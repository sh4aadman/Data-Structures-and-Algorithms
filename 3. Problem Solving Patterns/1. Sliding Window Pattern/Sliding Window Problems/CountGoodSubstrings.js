// Leetcode - Sliding Window - Problem 1876

// function countGoodSubstrings(s) {
//   var dict = new Set();
//   var start = 0,
//     count = 0;
//   for (var end = 0; end < s.length; end++) {
//     while (dict.has(s[end])) {
//         count++;
//         start = end;
//     }
//     dict.add(s[end]);
//   }

//   return count;
// }

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));

// Time Complexity - O()
// Space Complexity - O()
