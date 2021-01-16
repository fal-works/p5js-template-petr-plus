# p5.js Template PETR+

Template project for [p5.js](https://p5js.org/) sketches using [TypeScript](https://www.typescriptlang.org/) and other typical tools.

See also [other templates](https://fal-works.github.io/p5js-templates/).


## Differences from [Template PETR](https://github.com/fal-works/p5js-template-petr)

- Works on [p5.js instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode).
    - So you don't have to use ESLint config specific to p5.js any more, because using [@types/p5](https://www.npmjs.com/package/@types/p5) is enough. However, in case [@types/p5](https://www.npmjs.com/package/@types/p5) is not up to date, sometimes you might have to escape some `p5` methods (which lack correct type declarations) with `any`.
- Minifies the output code using [terser](https://terser.org/).
- Maybe some other trivial changes.
