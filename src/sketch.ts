import { createSketch, SketchDef } from "./p5-util/sketch";

/** This is a setup function. */
const setup: SketchDef["setup"] = (p) => {
  p.createCanvas(400, 400);
};

/** This is a draw function. */
const draw: SketchDef["draw"] = (p) => {
  p.background(220);
};

/** Object to be passed to `new p5()`. */
export const sketch = createSketch({
  setup,
  draw,
});
