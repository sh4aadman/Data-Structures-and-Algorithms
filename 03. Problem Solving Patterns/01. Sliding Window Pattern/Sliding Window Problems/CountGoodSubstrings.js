// Leetcode - Sliding Window - Problem 1876

function countGoodSubstrings(s) {
  var count = 0;

  for (var i = 0; i <= s.length - 3; i++) {
    var a = s[i];
    var b = s[i + 1];
    var c = s[i + 2];

    if (a !== b && a !== c && b !== c) count++;
  }

  return count;
}

console.log(countGoodSubstrings("xyzzaz"));
console.log(countGoodSubstrings("aababcabc"));

// Time Complexity - O(n)
// Space Complexity - O(1)

// Set Approach
// function countGoodSubstrings(s) {
//   var count = 0;

//   for (var i = 0; i <= s.length - 3; i++) {
//     var window = new Set(s.substring(i, i + 3));

//     if (window.size === 3) count++;
//   }

//   return count;
// }

// console.log(countGoodSubstrings("xyzzaz"));
// console.log(countGoodSubstrings("aababcabc"));

// A slightly more overhead process for making a substring
