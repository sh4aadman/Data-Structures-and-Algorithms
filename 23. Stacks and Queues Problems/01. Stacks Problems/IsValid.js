// Leetcode - problem List - Problem 20

function isValid(s) {
    if (s.length % 2 !== 0) return false;

    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var char = s[i];

        switch (char) {
            case "(":
            case "{":
            case "[":
                stack.push(char);
                break;
            case ")":
                if (stack.pop() !== "(") return false;
                break;
            case "}":
                if (stack.pop() !== "{") return false;
                break;
            case "]":
                if (stack.pop() !== "[") return false;
                break;
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));

// Time Complexity - O(n)
// Space Complexity - O(n)
