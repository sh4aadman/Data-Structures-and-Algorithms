function strLength(a, b) {
  return a.length - b.length;
}

function pivot(arr, comparator, start = 0, end = arr.length - 1) {
  function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
  }

  var swapIdx = start;
  var pivot = arr[start];

  if (typeof comparator !== "function") {
    comparator = (a, b) => a - b;
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (comparator(pivot, arr[i]) > 0) {
      swapIdx++;
      swap(arr, i, swapIdx);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

// console.log(pivot([8, 4, 2, 5, 0, 10, 11, 12, 13, 16]));
console.log(
  pivot(["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"], strLength),
);
