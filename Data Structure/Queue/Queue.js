// class Queue{
//     constructor(){
//         this.items = []
//     }

//     enqueue(element){
//         this.items.push(element)
//     }

//     dequeue(){
//         return this.items.shift()
//     }

//     isEmpty(){
//         return this.items.length == 0
//     }

//     peek(){
//         if(!this.isEmpty()){
//             return console.log(this.items[0])
//         }
//         return null
//     }

//     size(){
//         return console.log(this.items.length);
//     }

//     print(){
//         console.log(this.items.toString())
//     }
// }

// const q = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.peek()
// q.isEmpty()
// q.size()
// q.print()
// console.log(q.dequeue())
// q.peek()
// __________________________________________________________________________________________________________________

// Queue using LL

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const dequeuedNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.length--;
    return dequeuedNode.value;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.front.value;
  }

  size() {
    return this.length;
  }

  print() {
    let current = this.front;
    const elements = [];
    while (current) {
      elements.push(current.value);
      current = current.next;
    }
    console.log(elements.join(", "));
  }
}

const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

console.log(q.peek());
console.log(q.isEmpty());
console.log(q.size());
q.print();

console.log(q.dequeue());
console.log(q.peek());
