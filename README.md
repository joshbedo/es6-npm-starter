# es6-npm-starter
Starter for developing an ES6 npm module

# How to use it

* Create or edit modules within the `/src` directory.
* Run `npm run compile` when you want to compile the `/src` directory.
* Run npm publish (NOTE: requires npm account to be setup)

usage example:
```js
import { ComponentA, ComponentB } from '<package-name>'

console.log(
  new ComponentA(),
  new ComponentB(),
  version() // npm package version
);
```
