// // Given an array, selectionSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

function selectionSort(arr, comparator) {
  if (typeof comparator !== "function") {
    // Providing a default Selection Sort Algorithm
    const swap = (arr, idx1, idx2) =>
      ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    for (let i = 0; i < arr.length; i++) {
      let lowest = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) lowest = j;
      }
      if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
  }

  // Sorting with defined comparator
  return arr.sort(comparator);
}

console.log(selectionSort([0, -10, 7, 4]));

// Time Complexity - O(n ^ 2)
// Space Complexity - O(1)
