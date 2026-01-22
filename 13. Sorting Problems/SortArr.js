// Leetcode - Problem list - Problem 912

function sortArray(nums) {
  if (nums.length <= 1) return nums;
  var mid = Math.floor(nums.length / 2);
  var left = sortArray(nums.slice(0, mid));
  var right = sortArray(nums.slice(mid));
  return merge(left, right);
}

function merge(arr1, arr2) {
  var result = [];
  var i = 0;
  var j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(sortArray([5, 1, 1, 2, 0, 0]));

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
