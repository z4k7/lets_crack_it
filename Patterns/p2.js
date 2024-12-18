result = "";

for (let i = 1; i <= 5; i++) {
  let code = 64 + i;

  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      result += String.fromCharCode(code);
    } else {
      result += " ";
    }
    code--;
  }
  result += "\n";
}

console.log(result);
