// Leetcode - JavaScript - Problem 2724

function sortBy(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// console.log(sortBy([5, 4, 1, 2, 3], (fn = (x) => x)));
// console.log(sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (fn = (d) => d.x)));
console.log(
  sortBy(
    [
      [3, 4],
      [5, 2],
      [10, 1],
    ],
    (fn = (x) => x[1]),
  ),
);

// Time Complexity - O(nlogn)
// Space Complexity - O(n)
