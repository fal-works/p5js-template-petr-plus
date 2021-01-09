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
export type P5WritableMethods = {
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
