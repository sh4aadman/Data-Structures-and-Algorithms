class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    var current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return current;
  }

  rotate(place) {
    if (place === 0 || place >= this.length) return this;
    if (place < 0) place = this.length + place;
    var current = this.head;
    var counter = 0;
    while (counter < place) {
      this.push(current.val);
      this.shift(current.val);
      current = current.next;
      counter++;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push(12);
list.push(28);
list.push(43);
console.log(list);
console.log(list.rotate(1));
