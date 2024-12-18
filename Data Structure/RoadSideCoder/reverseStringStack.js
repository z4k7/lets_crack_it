function reverseStack(s) {
  let split = s.split(" ");
  let stack = [];

  for (let val of split) {
    stack.push(val);
  }

  let result = "";

  while (stack.length) {
    const current = stack.pop();
    result += " " + current;
  }

  return result.trim();
}

let str = "the sky is blue";

result = reverseStack(str);

console.log(result);
