// Leetcode - Problem List - Problem 26

function removeDuplicates(nums) {
  var i = 1;
  for (var j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Time Complexity - O(n)
// Space Complexity - O(1)
