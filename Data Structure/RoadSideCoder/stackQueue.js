function MyStack() {
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function (x) {
  while (this.q1.length) {
    this.q2.push(this.q1.shift());
  }

  this.q1.push(x);

  while (this.q2.length) {
    this.q1.push(this.q2.shift());
  }
};

MyStack.prototype.pop = function () {
  return this.q1.shift();
};

MyStack.prototype.top = function () {
  if (!this.q1.length) return "Queue is empty";

  return this.q1[0];
};

MyStack.prototype.empty = function () {
  return !this.q1.length;
};

let stack = new MyStack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.top());
console.log(stack.empty());
