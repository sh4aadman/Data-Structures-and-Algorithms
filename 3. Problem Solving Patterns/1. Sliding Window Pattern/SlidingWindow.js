// Sliding Window Pattern

// Creating a window from one position to another - depending on certain conditions, the window either increases or closes (and a new window is created).

function slidingWindow(arr, num) {
  var maxSum = 0;
  var tempSum = 0;
  if (arr.length < num) return null;
  for (var i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (var j = num; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - num];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Time Complexity - O(n)
// Space Complexity - O(1)
