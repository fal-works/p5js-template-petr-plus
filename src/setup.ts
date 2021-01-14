import type { SketchDef } from "./p5-util/sketch";

/** This is a setup function. */
export const setup: SketchDef["setup"] = (p) => {
  p.createCanvas(400, 400);
};
