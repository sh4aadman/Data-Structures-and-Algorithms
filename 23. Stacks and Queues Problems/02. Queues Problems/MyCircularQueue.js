// Leetcode - Queue - Problem 622

// Array Approach
class MyCircularQueue {
  constructor(k) {
    this.queue = new Array(k);
    this.capacity = k;
    this.head = 0;
    this.tail = -1;
    this.count = 0;
  }

  Front() {
    return this.isEmpty() ? -1 : this.queue[this.head];
  }

  Rear() {
    return this.isEmpty() ? -1 : this.queue[this.tail];
  }

  enQueue(value) {
    if (this.isFull()) return false;

    this.tail = (this.tail + 1) % this.capacity;
    this.queue[this.tail] = value;
    this.count++;
    return true;
  }

  deQueue() {
    if (this.isEmpty()) return false;

    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return true;
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.capacity;
  }
}

// Explanation
var myCircularQueue = new MyCircularQueue(3);
console.log(myCircularQueue.enQueue(1)); // return True
console.log(myCircularQueue.enQueue(2)); // return True
console.log(myCircularQueue.enQueue(3)); // return True
console.log(myCircularQueue.enQueue(4)); // return False
console.log(myCircularQueue.Rear()); // return 3
console.log(myCircularQueue.isFull()); // return True
console.log(myCircularQueue.deQueue()); // return True
console.log(myCircularQueue.enQueue(4)); // return True
console.log(myCircularQueue.Rear()); // return 4

// Time Complexity - O(1)
// Space Complexity - O(k)
