// Leetcode - Binary Search - Problem 278

var firstBadVersion = function (isBadVersion) {
  return function (n) {
    var start = 1;
    var end = n;
    while (start < end) {
      var middle = Math.floor((start + end) / 2);
      if (isBadVersion(middle)) {
        end = middle;
      } else {
        start = middle + 1;
      }
    }
    return start;
  };
};

// Time Complexity - O(logn)
// Space Complexity - O(1)
