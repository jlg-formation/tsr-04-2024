import "./style.css";

const r = 1;

const cx0 = 50;
const cy0 = 50;
const r0 = 45;

const gSamples = document.querySelector(".samples");
if (gSamples === null) {
  throw new Error("Cannot find selector .samples");
}

const samples = 10;
const multiplicationFactor = 2;
for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const angle = (i * 2 * Math.PI) / samples - Math.PI / 2;

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.setAttribute("cx", cx + "");
  circle.setAttribute("cy", cy + "");
  circle.setAttribute("r", r + "");
  gSamples.appendChild(circle);
}

const gLines = document.querySelector(".lines");
if (gLines === null) {
  throw new Error("Cannot find selector .lines");
}

for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const angle1 = (i * 2 * Math.PI) / samples - Math.PI / 2;

  const x1 = cx0 + r0 * Math.cos(angle1);
  const y1 = cy0 + r0 * Math.sin(angle1);

  const angle2 =
    (i * multiplicationFactor * 2 * Math.PI) / samples - Math.PI / 2;

  const x2 = cx0 + r0 * Math.cos(angle2);
  const y2 = cy0 + r0 * Math.sin(angle2);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1 + "");
  line.setAttribute("y1", y1 + "");
  line.setAttribute("x2", x2 + "");
  line.setAttribute("y2", y2 + "");
  gLines.appendChild(line);
}
