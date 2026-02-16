// Leetcode - Sliding Window - Problem 594

function findLHS(nums) {
  nums.sort((a, b) => a - b);
  var left = 0;
  var maxLength = 0;

  for (var right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 1) left++;

    if (nums[right] - nums[left] === 1)
      maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 1, 1, 1]));

// Time Complexity - O(nlogn)
// Space Complexity - O(1)
