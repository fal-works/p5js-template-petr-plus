import { createSketch, SketchDef } from "./p5-util/sketch";

/** This is a setup function. */
const setup: SketchDef["setup"] = (p) => {
  p.createCanvas(640, 480);

  p.noFill();
  p.stroke(0);
  p.strokeWeight(10);
};

/** This is a draw function. */
const draw: SketchDef["draw"] = (p) => {
  p.background(240);

  const diameter = 360 + Math.sin(0.1 * p.frameCount) * 40;
  p.circle(p.width / 2, p.height / 2, diameter);
};

/** Object to be passed to `new p5()`. */
export const sketch = createSketch({
  setup,
  draw,
});
