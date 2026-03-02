// Leetcode - Sliding Window - Problem 594

// The intuition is to use frequency counter pattern instead of sliding window to lessen the time complexity - O(nlogn) - sort O(logn) > sliding window O(n).

function findLHS(nums) {
  var dict = new Map();
  for (var num of nums) {
    dict.set(num, (dict.get(num) || 0) + 1);
  }
  var maxLength = 0;
  for (var [num, count] of dict.entries()) {
    if (dict.has(num + 1)) {
      var currentLength = count + dict.get(num + 1);
      maxLength = Math.max(maxLength, currentLength);
    }
  }
  return maxLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));

// Time Complexity - O(n)
// Space Complexity - O(n)
