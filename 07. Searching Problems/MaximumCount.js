// Leetcode - Problem List - Problem 2529

function maximumCount(nums) {
  var negCount = binarySearch(nums, 0);
  var posCount = nums.length - binarySearch(nums, 1);
  return Math.max(negCount, posCount);
}

function binarySearch(arr, target) {
  var left = 0,
    right = arr.length - 1,
    result = arr.length;

  while (left <= right) {
    var middle = Math.floor((left + right) / 2);
    if (arr[middle] < target) left = middle + 1;
    else {
      result = middle;
      right = middle - 1;
    }
  }
  return result;
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
console.log(maximumCount([5, 20, 66, 1314]));

// Time Complexity - O(logn)
// Space Complexity - O(1)
