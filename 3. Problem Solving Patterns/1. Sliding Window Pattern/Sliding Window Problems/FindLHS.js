// Leetcode - Sliding Window - Problem 594

function findLHS(nums) {
  var start = 0;
  for (var end = 0; end < nums.length; end++) {
    if (
      Math.abs(nums[end] - nums[start]) === 1 ||
      nums[end] - nums[start] === 0
    ) {
      var windowLength = end - start + 1;
    }
  }

  return windowLength;
}

console.log(findLHS([1,1,1,1]));

// Time Complexity - O()
// Space Complexity - O()
