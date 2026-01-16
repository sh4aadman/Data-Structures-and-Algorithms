// LeetCode - Binary Search - Problem 35

function SearchInsertPosition(nums, target) {
  var start = 0;
  var end = nums.length - 1;
  while (start <= end) {
    var middle = Math.floor((start + end) / 2);
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) end = middle - 1;
    else start = middle + 1;
  }
  return start;
}
console.log(SearchInsertPosition([1, 3, 5, 6], 7));

// Time Complexity - O(n)
// Space Complexity - O(1)
