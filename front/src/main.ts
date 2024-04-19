import { cx0, cy0, r, r0 } from "./constants";
import { getAngle, getCoordinatesOnCircle } from "./math";
import "./style.css";
import { querySelector } from "./utils";

const gSamples = querySelector(".samples");

const samples = 10;
const multiplicationFactor = 2;
for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const angle = getAngle(i, samples);

  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  circle.setAttribute("cx", cx + "");
  circle.setAttribute("cy", cy + "");
  circle.setAttribute("r", r + "");
  gSamples.appendChild(circle);
}

const gLines = querySelector(".lines");

for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const angle1 = getAngle(i, samples);
  const { x: x1, y: y1 } = getCoordinatesOnCircle(angle1);

  const angle2 = getAngle(i * multiplicationFactor, samples);
  const { x: x2, y: y2 } = getCoordinatesOnCircle(angle2);

  const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", x1 + "");
  line.setAttribute("y1", y1 + "");
  line.setAttribute("x2", x2 + "");
  line.setAttribute("y2", y2 + "");
  gLines.appendChild(line);
}
