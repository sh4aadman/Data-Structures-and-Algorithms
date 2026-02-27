// Leetcode - Problem List - Problem 06

function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    var rows = new Array(numRows).fill("");
    var currentRow = 0;
    var goingDown = false;

    for (var char of s) {
        rows[currentRow] += char;

        if (currentRow === 0 || currentRow === numRows - 1) goingDown = !goingDown;

        currentRow += goingDown ? 1 : -1;
    }

    return rows.join("");
}

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));

// Time Complexity - O(n)
// Space Complexity - O(n)
