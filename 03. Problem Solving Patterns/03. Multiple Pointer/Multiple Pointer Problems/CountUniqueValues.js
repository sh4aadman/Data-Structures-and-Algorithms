function countUniqueValues(nums) {
  if (nums.length === 0) return 0;
  var i = 0;
  for (var j = i + 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));

// Time Complexity - O(n)
// Space Complexity - O(1)
