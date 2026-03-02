// Leetcode - Problem List - Problem 704

function search(nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right && nums[middle] !== target) {
    var middle = Math.floor((left + right) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else if (nums[middle] > target) {
      right = middle - 1;
    }
  }
  return nums[middle] === target ? middle : -1;
}

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));

// Time Complexity - O(logn)
// Space Complexity - O(1)
