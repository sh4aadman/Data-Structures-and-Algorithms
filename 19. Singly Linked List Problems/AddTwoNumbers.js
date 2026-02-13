// Leetcode - Linked List - Problem 02

class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function addTwoNumbers(l1, l2) {
    var dummy = new ListNode(0);
    var current = dummy, carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        var x = l1 !== null ? l1.val : 0;
        var y = l2 !== null ? l2.val : 0;
        var sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummy.next;
}

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

// Time Complexity - O(max(m, n))
// Space Complexity - O(1)
