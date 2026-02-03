// Leetcode - Sliding Window - Problem 219

// Space Complexity - O(n)
// function containsNearbyDuplicate(nums, k) {
//   var dict = new Set();
//   var start = 0;
//   for (var end = 0; end < nums.length; end++) {
//     while (dict.has(nums[end])) {
//       if (start !== end && Math.abs(start - end) <= k) {
//         return true;
//       }
//       dict.delete(nums[start]);
//       start++;
//     }
//     dict.add(nums[end]);
//   }
//   return false;
// }

// Space Complexity - O(k)
function containsNearbyDuplicate(nums, k) {
  var dict = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (i > k) dict.delete(nums[i - k - 1]);
    if (dict.has(nums[i])) return true;
    dict.add(nums[i]);
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));

// Time Complexity - O(n)
// Space Complexity - O(k)
