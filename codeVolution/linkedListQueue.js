const LinkedList = require("./linkedList");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();

console.log(`Is queue empty`, queue.isEmpty());
console.log(`Size of queue:`, queue.getSize());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log(`Peek`, queue.peek());

queue.dequeue();
queue.print();
