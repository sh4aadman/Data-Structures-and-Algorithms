// piece of data - val
// reference to the next node - next
// reference to the previous node - prev

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.prev = first;
// console.log(first);

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}