// Leetcode - Binary Search - Problem 34

function firstAndLastPosition(nums, target) {
  var left = binarySearch(nums, target, true);
  var right = binarySearch(nums, target, false);
  return [left, right];

  function binarySearch(nums, target, leftBias) {
    var start = 0;
    var end = nums.length - 1;
    var i = -1;
    while (start <= end) {
      var middle = Math.floor((start + end) / 2);
      if (target < nums[middle]) end = middle - 1;
      else if (target > nums[middle]) start = middle + 1;
      else {
        i = middle;
        if (leftBias) end = middle - 1;
        else start = middle + 1;
      }
    }
    return i;
  }
}

console.log(firstAndLastPosition([5, 7, 7, 8, 8, 10], 8));

// Time Complexity - O(n)
// Space Complexity - O(1)
