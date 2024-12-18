class optimizedQueue{
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear]= element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return console.log(this.rear - this.front == 0);
    }

    peek(){
        return console.log(this.items[this.front])
    }

    size(){
        return console.log(this.rear - this.front);
    }

    print(){
        console.log(this.items)
    }
}

let oq= new optimizedQueue()

oq.enqueue(1)
oq.enqueue(2)
oq.enqueue(3)
oq.size()
