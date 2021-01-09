import p5 from "p5";
import { P5WritableMethods } from "./p5-types";

/**
 * Function object to be passed to `new p5()`.
 * This will assign several methods (such as `setup`/`draw`) to `p`.
 */
export type Sketch = (p: p5) => void;

/**
 * Object that defines a p5.js sketch and will be passed to `createSketch()`.
 * It should contain particular `p5` methods with `p5` instances added as
 * the first argument, e.g.:
 *
 * ```
 * setup: (p) => { p.createCanvas(400, 400); },
 * draw: (p) => { p.background(220); }
 * ```
 */
export type SketchDef = {
  [T in keyof P5WritableMethods]?: (
    p: p5,
    ...args: Parameters<P5WritableMethods[T]>
  ) => ReturnType<P5WritableMethods[T]>;
};

/** Creates a function object to be passed to `new p5()`. */
export const createSketch = (definition: SketchDef): Sketch => {
  const methodNames = Object.keys(definition) as (keyof SketchDef)[];

  return (p) => {
    methodNames.forEach((methodName) => {
      const method = definition[methodName];
      if (method) p[methodName] = method.bind(undefined, p);
    });
  };
};
