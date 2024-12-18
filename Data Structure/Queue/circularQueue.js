/*
CIRCULAR QUEUE

=> The size of the queue is fixed and a single block of memory is used as if the first element
 is connected to the last element

=> Also reffered to as circular buffer or ring buffer and follows the FIFO principle

=> A circular queue will reuse the empty block created during the dequeue operation

=> When working with queues of fixed maximum size, a circular queue is a great implementation choice

*/
// ------------------------------------------------------------------------------------------------------------

class circularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength == 0;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if (this.front == -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const cq = new circularQueue(5)
console.log(cq.isEmpty());

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.enqueue(50)

console.log(cq.isFull());
cq.dequeue()
cq.enqueue(60)
cq.enqueue(70)
cq.print()
console.log(cq.peek());

