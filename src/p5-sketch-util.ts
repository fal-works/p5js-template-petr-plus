import p5 from "p5";

/**
 * Function object to be passed to `new p5()`.
 * This will assign several methods (such as `setup`/`draw`) to `p`.
 */
export type Sketch = (p: p5) => void;

/**
 * Function that should be called by `p5` on any keyboard event.
 */
type KeyboardEventCallback =
  | ((event?: KeyboardEvent) => void)
  | ((event?: KeyboardEvent) => boolean);

/**
 * Function that should be called by `p5` on any mouse event.
 */
type MouseEventCallback =
  | ((event?: MouseEvent) => void)
  | ((event?: MouseEvent) => boolean);

/**
 * Function that should be called by `p5` on any touch event.
 */
type TouchEventCallback =
  | ((event?: TouchEvent) => void)
  | ((event?: TouchEvent) => boolean);

/**
 * Methods of `p5` that may be overwritten in `new p5()`.
 */
type P5WritableMethods = {
  preload: () => void;
  setup: () => void;
  draw: () => void;

  keyPressed: KeyboardEventCallback;
  keyReleased: KeyboardEventCallback;
  keyTyped: KeyboardEventCallback;

  mouseMoved: MouseEventCallback;
  mouseDragged: MouseEventCallback;
  mousePressed: MouseEventCallback;
  mouseReleased: MouseEventCallback;
  mouseClicked: MouseEventCallback;
  doubleClicked: MouseEventCallback;
  mouseWheel: MouseEventCallback;

  touchStarted: TouchEventCallback;
  touchMoved: TouchEventCallback;
  touchEnded: TouchEventCallback;
};

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
export type SketchDefinition = {
  [T in keyof P5WritableMethods]?: (
    p: p5,
    ...args: Parameters<P5WritableMethods[T]>
  ) => ReturnType<P5WritableMethods[T]>;
};

/** Type of `createSketch`. */
type CreateSketchFunction = (definition: SketchDefinition) => Sketch;

/** Creates a function object to be passed to `new p5()`. */
export const createSketch: CreateSketchFunction = (definition) => (p) => {
  const methodNames = Object.keys(definition) as (keyof SketchDefinition)[];

  for (const methodName of methodNames) {
    const method = definition[methodName];
    if (method) p[methodName] = method.bind(undefined, p);
  }
};
