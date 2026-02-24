// Leetcode - Problem List - Problem 2951

function findPeaks(mountain) {
  var peaks = [];
  var n = mountain.length;
  for (var i = 1; i < n - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1])
      peaks.push(i);
  }
  return peaks;
}

console.log(findPeaks([2, 4, 4]));
console.log(findPeaks([1, 4, 3, 8, 5]));
console.log(findPeaks([1, 1, 3]));

// Time Complexity - O(n)
// Space Complexity - O(1)
