// Leetcode - Problem List - Problem 146

// The same problem can be solved by implementing Map only. A Doubly Linked List allows to remove a node from the middle of the list and move it to the front (the "Most Recently Used" position) in O(1) time, provided that having a reference to that node.

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;

    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (this.cache.has(key)) {
      var node = this.cache.get(key);

      this.remove(node);
      this.add(node);

      return node.value;
    }

    return -1;
  }

  put(key, value) {
    if (this.cache.has(key)) this.remove(this.cache.get(key));

    var newNode = new Node(key, value);

    this.cache.set(key, newNode);
    this.add(newNode);

    if (this.cache.size > this.capacity) {
      var lru = this.tail.prev;

      this.remove(lru);
      this.cache.delete(lru.key);
    }
  }

  add(node) {
    var afterNode = this.head.next;

    node.next = afterNode;
    node.prev = this.head;

    this.head.next = node;
    afterNode.prev = node;
  }

  remove(node) {
    var beforeNode = node.prev;
    var afterNode = node.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
  }
}

// Explanation
var lRUCache = new LRUCache(2);
console.log(lRUCache.put(1, 1)); // cache is {1=1}
console.log(lRUCache.put(2, 2)); // cache is {1=1, 2=2}
console.log(lRUCache.get(1)); // return 1
console.log(lRUCache.put(3, 3)); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2)); // returns -1 (not found)
console.log(lRUCache.put(4, 4)); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(lRUCache.get(1)); // return -1 (not found)
console.log(lRUCache.get(3)); // return 3
console.log(lRUCache.get(4)); // return 4

// Time Complexity - O(1)
// Space Complexity - O(n)
