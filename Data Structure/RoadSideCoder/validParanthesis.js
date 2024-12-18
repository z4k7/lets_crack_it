function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length;i++) {
    const char = s[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (!stack.length) {
        return false;
      }

      const top = stack.pop();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }
    }
  }

  return !stack.length;
}

const str = "(]";

let result = isValid(str);
console.log(result);
