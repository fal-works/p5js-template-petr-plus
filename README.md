# p5.js Template PETR+

*Other languages (wiki):* [[ ja ]](https://github.com/fal-works/p5js-template-petr-plus/wiki/Readme-ja)

## About

Template project for [p5.js](https://p5js.org/) sketches using [TypeScript](https://www.typescriptlang.org/) and other typical tools.

See also [other templates](https://fal-works.github.io/p5js-templates/).


## Differences from [Template PETR](https://github.com/fal-works/p5js-template-petr)

- Works on [p5.js instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).
- Minifies the output code using [terser](https://terser.org/).
- In `index.html`,
    - `defer` attribute is added in `<script>` tags.
    - loads the minified edition of p5.js, which also disables the p5.js Friendly Error System.
