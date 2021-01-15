// See also: https://rollupjs.org/

const banner = `/**
 * This is a p5.js sketch made with p5js-template-petr-plus.
 *
 * @license CC0-1.0
 */
`;

const config = {
  input: "tsc-out/main.js",
  output: {
    file: "dist/script.js",
    format: "iife",
    banner,
    globals: { p5: "p5" },
    interop: "default",
  },
  external: ["p5"],
};

export default config;
