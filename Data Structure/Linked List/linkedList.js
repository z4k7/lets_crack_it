/* 
LINKED LIST
=> A linked list is a linear data structure that includes a series of connected nodes
=> Each node consists of a data value and a pointer that points to the next node
=> The elements can be easily inserted or removed without reallocation or reorganization
   of the entire structure
=> Random access of elements is not feasible and accessing an element has linear time
   complexity  

   APPLICATIONS

   => All applications of both stacks and queues are applications of linked lists
   => Image Viewer
*/

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.size = 0;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   insertFirst(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.size++;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   insertLast(data) {
//     const newNode = new Node(data);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.size++;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   insertAt(data, index) {
//     const newNode = new Node(data);
//     if (index < 0 || index >= this.size) {
//       return;
//     }
//     if (index === 0) {
//       newNode.next = this.head;
//       this.head = newNode;
//     } else {
//       let current = this.head;
//       let previous;
//       let count = 0;

//       while (count < index) {
//         previous = current;
//         current = current.next;
//         count++;
//       }
//       previous.next = newNode;
//       newNode.next = current;
//     }
//     this.size++;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   print() {
//     let current = this.head;
//     let listValues = "";
//     while (current) {
//       listValues += `${current.data} `;
//       current = current.next;
//     }
//     console.log(listValues);
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   removeFirst() {
//     if (!this.head) {
//       return;
//     } else {
//       let remElement = this.head;
//       this.head = remElement.next;
//       remElement = null;
//     }
//     this.size--;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   removeLast() {
//     if (!this.head) {
//       return;
//     } else {
//       let current = this.head;
//       let previous;
//       while (current.next) {
//         previous = current;
//         current = current.next;
//       }
//       previous.next = null;
//       this.tail = previous;
//     }
//     this.size--;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   removeAt(index) {
//     if (index < 0 || index > this.size) {
//       return;
//     }
//     if (index === 0) {
//       let remElement = this.head;
//       this.head = remElement.next;
//       remElement = null;
//     } else {
//       let current = this.head;
//       let previous;
//       let count = 0;

//       while (count < index) {
//         previous = current;
//         current = current.next;
//         count++;
//       }
//       previous.next = current.next;
//       current = null;
//     }
//     this.size--;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//   removeValue(value) {
//     if (!this.head) {
//       return null;
//     }
//     if (this.head.data == value) {
//       this.head = this.head.next;
//       this.size--;
//       return value;
//     } else {
//       let previous = this.head;
//       while (previous.next && previous.next.data !== value) {
//         previous = previous.next;
//       }
//       if (previous.next) {
//         let removeNode = previous.next;
//         previous.next = removeNode.next;
//         this.size--;
//         return value;
//       }
//       return null;
//     }
//   }

//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//   insertBeforeElement(data, newData) {
//     const newNode = new Node(newData);
//     if (!this.head) {
//       return;
//     }
//     if (this.head.data === data) {
//       newNode.next = this.head;
//       this.head = newNode;
//       return;
//     }
//     let current = this.head;
//     let previous;
//     while (current) {
//       if (current.data === data) {
//         newNode.next = current;
//         previous.next = newNode;
//       }
//       previous = current;
//       current = current.next;
//     }
//     this.size++;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   middle() {
//     let current = this.head;
//     let mid = Math.floor(this.size / 2);
//     let count = 0;
//     while (count < mid) {
//       current = current.next;
//       count++;
//     }
//     console.log(current.data);
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   reverse() {
//     let previous;
//     let current = this.head;
//     while (current) {
//       let reverse = current.next;
//       current.next = previous;
//       previous = current;
//       current = reverse;
//     }
//     this.head = previous;
//   }
//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   search(value) {
//     if (!this.head) {
//       return -1;
//     }
//     let index = 0;
//     let current = this.head;
//     while (current) {
//       if (current.data == value) {
//         return index;
//       }
//       current = current.next;
//       index++;
//     }
//     return -1;
//   }

//   // --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// }
// const ll = new LinkedList();

// ll.insertFirst(6);
// ll.insertFirst(4);
// ll.insertFirst(3);
// ll.insertFirst(2);
// ll.insertFirst(1);
// ll.insertLast(7);
// ll.insertBeforeElement(6, 5);
// ll.reverse();
// ll.removeFirst()
// ll.removeLast()
// ll.removeAt(2)
// ll.removeValue(8)
// console.log(ll.search(3));
// ll.print();

// console.log("size:", ll.size);
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Optimised LL

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertFirst(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  insertLast(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  print() {
    let current = this.head;
    let listValues = "";
    while (current) {
      listValues += `${current.data} `;
      current = current.next;
    }
    console.log(listValues.trim());
  }

  reverse() {
    let previous;
    let current = this.head;
    while (current) {
      let reverse = current.next;
      current.next = previous;
      previous = current;
      current = reverse;
    }
    this.head = previous;
  }
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(4);
// ll.reverse();
ll.print();
