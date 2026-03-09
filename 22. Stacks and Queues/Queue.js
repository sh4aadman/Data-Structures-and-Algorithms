class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var removed = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return removed.val;
  }
}

// Time Complexities ->
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n) (Optional)
// Access - O(n) (Optional)
