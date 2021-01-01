import p5 from "p5";

/** This is a setup function. */
const setup = (p: p5): void => {
  p.createCanvas(640, 480);

  p.noFill();
  p.stroke(0);
  p.strokeWeight(10);
};

/** This is a draw function. */
const draw = (p: p5): void => {
  p.background(240);

  const diameter = 360 + Math.sin(0.1 * p.frameCount) * 40;
  p.circle(p.width / 2, p.height / 2, diameter);
};

/** Functions to be passed to `createSketch()`. */
export const methods = {
  setup,
  draw,
};
