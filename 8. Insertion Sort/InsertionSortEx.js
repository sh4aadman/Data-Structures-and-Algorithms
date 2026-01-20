// // Given an array, insertionSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

function insertionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    // Providing a default Insertion Sort Algorithm
    for (var i = 1; i < arr.length; i++) {
      let currentValue = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j];
      }
      arr[j + 1] = currentValue;
    }
    return arr;
  }

  // Sorting with defined comparator
  return arr.sort(comparator);
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));