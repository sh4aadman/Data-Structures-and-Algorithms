// Leetcode - Sorting - Problem 88

function mergeSortedArray(nums1, m, nums2, n) {
  var i = m - 1;
  var j = n - 1;
  var k = m + n - 1;
  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }

  return nums1;
}

console.log(mergeSortedArray([0], 0, [1], 1));

// Time Complexity - O()
// Space Complexity - O()
