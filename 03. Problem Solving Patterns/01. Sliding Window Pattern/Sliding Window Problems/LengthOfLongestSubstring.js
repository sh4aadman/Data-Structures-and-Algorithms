// Leetcode - Sliding Window - Problem 03

function lengthOfLongestSubstring(s) {
  var dict = new Set();
  var start = 0,
    longest = 0;

  for (var end = 0; end < s.length; end++) {
    while (dict.has(s[end])) {
      dict.delete(s[start]);
      start++;
    }
    longest = Math.max(longest, end - start + 1);
    dict.add(s[end]);
  }
  return longest;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("bbbbb"));

// Time Complexity - O(n)
// Space Complexity - O(n)

// Alternate Solution
// var lengthOfLongestSubstring = function(s) {
//     let max_count = 0, current_count= 0, left = 0;

//     for(let r = 0; r < s.length; r++){
        
//         for(let i = left; i<r; i++){
//             if(s[i] === s[r]){
//                 left= i+1;
//                 break;
//             }
//         }

//         current_count = r-left+1;
//         max_count = Math.max(current_count, max_count);
//     }

//     return max_count;
// };