// Leetcode -Problem List - Problem 04

// Approach 01 - Two Pointer Technique
// Another approach is Binary Search

function findMedianSortedArrays(nums1, nums2) {
  var n = nums1.length;
  var m = nums2.length;

  var i = 0;
  var j = 0;
  var m1 = 0;
  var m2 = 0;
  var middle = Math.floor((n + m) / 2);

  for (var count = 0; count <= middle; count++) {
    m2 = m1;

    if (i < n && j < m) {
      if (nums1[i] > nums2[j]) {
        m1 = nums2[j];
        j++;
      } else {
        m1 = nums1[i];
        i++;
      }
    } else if (i < n) {
      m1 = nums1[i];
      i++;
    } else {
      m1 = nums2[j];
      j++;
    }
  }

  if ((n + m) % 2 === 1) {
    return m1;
  } else {
    return (m1 + m2) / 2.0;
  }
}

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));

// Time Complexity - O(m + n)
// Space Complexity - O(1)
