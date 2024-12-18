const circleCoords = [];

function circleIntersect(x0, y0, r0, x1, y1, r1) {
  return Math.hypot(x0 - x1, y0 - y1) <= r0 + r1;
}

function isIntersecting() {
  const cOne = circleCoords[0];
  const cTwo = circleCoords[1];
  const x1 = cOne.x;
  const y1 = cOne.y;
  const r1 = cOne.radius;
  const x2 = cTwo.x;
  const y2 = cTwo.y;
  const r2 = cTwo.radius;

  return circleIntersect(x1, y1, r1, x2, y2, r2);
}

document.addEventListener("click", (e) => {
  const totalCircles = document.querySelectorAll(".circle");

  if (totalCircles.length === 2) {
    totalCircles.forEach((cir) => {
      document.body.removeChild(cir);
      circleCoords.shift();
    });
  }

  const x = e.clientX;
  const y = e.clientY;

  const radius = Math.floor(Math.random() * (200 - 50) + 50);

  circleCoords.push({ x, y, radius });

  const circle = document.createElement("div");

  circle.classList.add("circle");

  var elStyle = circle.style;
  elStyle.top = y - radius + "px";
  elStyle.left = x - radius + "px";
  elStyle.width = radius * 2 + "px";
  elStyle.height = radius * 2 + "px";

  document.body.appendChild(circle);

  if (circleCoords.length === 2) {
    const result = isIntersecting();
    console.log(result);
  }
});
