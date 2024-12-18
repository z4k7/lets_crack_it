class Queue{
    constructor() {
         this.queue = []
    }
    
    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Underflow"
        }
      return  this.queue.shift()
    }

    peek() {
        if (this.isEmpty()) {
            return 'Queue is Empty'
        }
    return this.queue[0]
}

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.queue.length
    }

    print() {
        return this.queue.toString()
    }
 }

const queue = new Queue()
 
queue.enqueue(5)
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
console.log(queue.peek());
console.log(queue.dequeue())
