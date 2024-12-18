const LinkedList = require("./linkedList");

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
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
    return this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(`Is stack empty?`, stack.isEmpty());
console.log(`Stack size:`, stack.getSize());

stack.push(30);
stack.push(20);
stack.push(10);

console.log(`Peek`, stack.peek());

stack.pop();

console.log(`Peek`, stack.peek());
stack.print();
