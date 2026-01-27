// Quick Sort Algorithm

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;
  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(pivot([4, 3, 7, 1, 2, 9]));
console.log(quickSort([4, 3, 7, 1, 2, 9]));

// Time Complexity - O(nlogn)
// Space Complexity - O(logn)
