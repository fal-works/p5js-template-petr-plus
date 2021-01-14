import p5 from "p5";
import { createSketch } from "./p5-util/sketch";
import { setup } from "./setup";
import { draw } from "./draw";

const sketch = createSketch({
  setup,
  draw,
});

new p5(sketch);
