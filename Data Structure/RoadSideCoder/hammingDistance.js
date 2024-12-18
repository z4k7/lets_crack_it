const hammingDistance = (x, y) => {
  if (x.length !== y.length) {
    throw new Error("Strings must be of equal length");
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};

// console.log(hammingDistance("hello","hwllr"));

// !___________________________________________________

// * Bitwise approach

const hammingDistanceBit = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length !== y.length) {
      x = "0" + x;
    }
  } else {
    while (y.length !== x.length) {
      y = "0" + y;
    }
  }

  let distance = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};

console.log(hammingDistanceBit(1,4));
