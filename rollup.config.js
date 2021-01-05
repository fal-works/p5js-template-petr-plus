// See also: https://rollupjs.org/

const banner = `/**
 * This is a template project for p5.js sketches
 * using TypeScript and other typical tools.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "out/index.js",
  output: {
    file: "dist/sketch.js",
    format: "iife",
    banner,
    globals: {
      p5: "p5",
    },
    interop: "default",
  },
  external: ["p5"],
};

export default config;
