const expensive = () => {
  console.log("Expensive");
};

const throttle = (fn, delay) => {
  let flag = true;

  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterExpensive = throttle(expensive, 10);

window.addEventListener("resize", betterExpensive);
