class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

   isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
  }
  
  sum() {
    let sum = 0
    let current = this.head
    let index = 0
    while (current.next) {
      if (this.isPowerOfTwo(index)) {
        sum += current.value
      }
      current = current.next
      index++
    }
  }

  append(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log(`Nothing to remove`);
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;

    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      console.log(`Nothing to remove`);
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = this.head;
      while (previous.next !== this.tail) {
        previous = previous.next;
      }
      previous.next = null;
      this.tail = previous;
    }
    this.size--;
    return value;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log(`Invalid Index`);
      return;
    }

    if (index == 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);

      let previous = this.head;
      let count = 0;
      while (count < index - 1) {
        previous = previous.next;
        count++;
      }
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.size++;
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      console.log(`Invalid index`);
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = removeNode.next;
    } else {
      let previous = this.head;
      let count = 0;
      while (count < index - 1) {
        previous = previous.next;
        count++;
      }
      removeNode = previous.next;
      previous.next = removeNode.next;
    }
    this.size--;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("Nothing to remove, list is empty");
      return null;
    }

    if (value == this.head.value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let previous = this.head;
      while (previous.next && previous.next.value != value) {
        previous = previous.next;
      }
      if (previous.next) {
        let removeNode = previous.next;
        previous.next = removeNode.next;
        this.size--;
      } else {
        console.log("Value not found");
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      rerturn - 1;
    }
    let current = this.head;
    let i = 0;
    while (current) {
      if (current.value == value) {
        return i;
      }
      current = current.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let previous = null;
    let current = this.head;
    while (current) {
      let next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  concatenate(list) {
    if (this.isEmpty()) {
      this.head = list.head;
      this.tail = list.tail;
    } else {
      this.tail.next = list.head;
      this.tail = list.tail;
    }
    this.size += list.size;
  }

  mergeSortedLists(list1, list2) {
    const mergedList = new LinkedList();

    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 && current2) {
      if (current1.value <= current2.value) {
        mergedList.append(current1.value);
        current1 = current1.next;
      } else {
        mergedList.append(current2.value);
        current2 = current2.next;
      }
    }
    while (current1) {
      mergedList.append(current1.value);
      current1 = current1.next;
    }
    while (current2) {
      mergedList.append(current2.value);
      current2 = current2.next;
    }

    return mergedList;
  }

  print() {
    if (this.isEmpty()) {
      console.log(`List is empty!`);
    } else {
      let listValues = "";
      let current = this.head;

      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list1 = new LinkedList();
const list2 = new LinkedList();

list1.append(1);
list1.append(2);
list1.append(3);

list2.append(4);
list2.append(5);
list2.append(6);

const mergedList = new LinkedList();
let merge = mergedList.mergeSortedLists(list1, list2);

merge.print();

module.exports = LinkedList;

// const list = new LinkedList();

// console.log(`Is list empty?:`, list.isEmpty());
// console.log(`Size of list:`, list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.append(30);
// list.insert(25, 2);
// // list.removeValue(20);
// console.log(list.search(100));
// list.print();

// // list.reverse();
// list.print();

// list.removeFromFront();
// list.print();
