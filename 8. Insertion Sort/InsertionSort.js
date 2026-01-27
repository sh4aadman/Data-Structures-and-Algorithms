// Insertion Sort

// Supposing the left side of the array is always sorted, then inserting the new elements on the left side of the array in ascending order.

// https://youtube.com/shorts/OZRSCRNPj-Y?si=PhHjCcOnMGl-79fe

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

console.log(insertionSort([1, 4, 10, 2, 0]));

// Time Complexity - O(n ^ 2)
// Space Complexity - O(1)
