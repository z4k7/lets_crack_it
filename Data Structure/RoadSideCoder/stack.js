class Stack{
    constructor() {
        this.stack = []

    }

    push(element) {
        this.stack.push(element)
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty!, Can't pop anymore"
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty!"
        }
        return this.stack[this.size()-1]
    }

    isEmpty() {
        return this.size()===0
    }

    size() {
        return this.stack.length
    }
    print() {
        return this.stack.toString()
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())