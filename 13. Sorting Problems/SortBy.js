// Leetcode - JavaScript - Problem 2724

function sortBy(arr, fn) {
    for (var i = 1; i < arr.length; i++) {
        var minimum = fn(arr[i]);
        for (var j = i - 1; j >= 0 && fn(arr[j]) > minimum; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = minimum;
    }
    return arr;
}