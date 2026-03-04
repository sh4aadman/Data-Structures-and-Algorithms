// Leetcode - Problem List - Problem 432

class Node {
  constructor(count) {
    this.count = count;
    this.keys = new Set();

    this.next = null;
    this.prev = null;
  }
}

class AllOne {
  constructor() {
    this.map = new Map();

    this.head = new Node(-Infinity);
    this.tail = new Node(Infinity);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  insertAfter(previousNode, count) {
    var newNode = new Node(count);

    newNode.next = previousNode.next;
    newNode.prev = previousNode;

    previousNode.next.prev = newNode;
    previousNode.next = newNode;
  }

  insertBefore(currentNode, count) {
    var prevNode = new Node(count);

    prevNode.next = currentNode;
    prevNode.prev = currentNode.prev;

    currentNode.prev.next = prevNode;
    currentNode.prev = prevNode;
  }

  removeIfEmpty(currentNode) {
    if (currentNode.keys.size === 0) {
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
  }

  inc(key) {
    if (!this.map.has(key)) {
      if (this.head.next.count !== 1) {
        this.insertAfter(this.head, 1);
      }

      this.head.next.keys.add(key);
      this.map.set(key, this.head.next);
    } else {
      var currNode = this.map.get(key);
      var newCount = currNode.count + 1;

      if (currNode.next.count !== newCount) {
        this.insertAfter(currNode, newCount);
      }

      currNode.next.keys.add(key);
      this.map.set(key, currNode.next);
      currNode.keys.delete(key);
      this.removeIfEmpty(currNode);
    }
  }

  dec(key) {
    var currNode = this.map.get(key);
    if (!currNode) return;

    if (currNode.count === 1) {
      this.map.delete(key);
    } else {
      var newCount = currNode.count - 1;

      if (currNode.prev.count !== newCount) {
        this.insertBefore(currNode, newCount);
      }

      currNode.prev.keys.add(key);
      this.map.set(key, currNode.prev);
    }

    currNode.keys.delete(key);
    this.removeIfEmpty(currNode);
  }

  getMaxKey() {
    if (this.tail.prev === this.head) return "";

    return this.tail.prev.keys.values().next().value;
  }

  getMinKey() {
    if (this.head.next === this.tail) return "";

    return this.head.next.keys.values().next().value;
  }
}

// Explanation
var allOne = new AllOne();
console.log(allOne.inc("hello"));
console.log(allOne.inc("hello"));
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "hello"
console.log(allOne.inc("leet"));
console.log(allOne.getMaxKey()); // return "hello"
console.log(allOne.getMinKey()); // return "leet"

// Time Complexity - O(1)
// Space Complexity - O(n)
