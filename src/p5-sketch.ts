import p5 from "p5";

/** Function that should be called by `p5` on any keyboard event. */
type KeyboardEventCallback =
  | ((event?: KeyboardEvent) => void)
  | ((event?: KeyboardEvent) => boolean);

/** Function that should be called by `p5` on any mouse event. */
type MouseEventCallback =
  | ((event?: MouseEvent) => void)
  | ((event?: MouseEvent) => boolean);

/** Function that should be called by `p5` on any touch event. */
type TouchEventCallback =
  | ((event?: TouchEvent) => void)
  | ((event?: TouchEvent) => boolean);

/** Methods of `p5` that may be overwritten in `new p5()`. */
type P5Methods = {
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
 * Set of `p5` methods with a `p5` instance added as the first argument, e.g.:
 *
 * ```
 * setup: (p: p5) => { ... },
 * draw: (p: p5) => { ... }
 * ```
 */
export type P5UnboundMethods = {
  [T in keyof P5Methods]?: (
    p: p5,
    ...args: Parameters<P5Methods[T]>
  ) => ReturnType<P5Methods[T]>;
};

/**
 * Function object to be passed to `new p5()`.
 *
 * This will assign several methods (such as `setup`/`draw`) to `p`.
 */
export type P5Sketch = (p: p5) => void;

/**
 * Creates a new `P5Sketch` object to be passed to `new p5()`.
 *
 * `methods` should be a set of `p5` methods with a `p5` instance added as the
 * first argument, e.g.:
 *
 * ```js
 * {
 *   setup: (p) => {
 *     p.createCanvas(400, 400);
 *   },
 *   draw: (p) => {
 *     p.background(220);
 *   }
 * }
 * ```
 */
export const createSketch = (methods: P5UnboundMethods): P5Sketch => (p) => {
  const methodNames = Object.keys(methods) as (keyof P5UnboundMethods)[];

  for (const methodName of methodNames) {
    const method = methods[methodName];
    if (method) p[methodName] = method.bind(undefined, p);
  }
};
