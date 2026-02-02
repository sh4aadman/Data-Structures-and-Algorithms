// JavaScript default sorting method - array.sort()
// followed by a comparator function - array.sort(comparatorFunction)

function numberCompare(num1, num2) {
    // return num1 - num2;
    return num2 - num1;
}

console.log([1, 4, 2, 10, 3].sort(numberCompare));

// num1, num2 -> num1 - num2 -> negative value -> ascending
// num1, num2 -> num2 - num1 -> positive value -> descending