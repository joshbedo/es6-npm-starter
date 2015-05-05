"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

require("core-js/shim");

var Pkg = _interopRequire(require("../package.json"));

var ComponentA = _interopRequire(require("./ComponentA.es6.js"));

var ComponentB = _interopRequire(require("./ComponentB.es6.js"));

module.exports = {

  // constructor( name ) {
  //   console.log(ComponentA);
  //   this.name = name;
  // }

  ComponentA: ComponentA,
  ComponentB: ComponentB,

  version: function version() {
    return Pkg.version;
  }

  // sayHello() {
  //   return `Hello ${ this.name }!`;
  // }

  // sayHelloThreeTimes() {
  //   let hello = this.sayHello();
  //   return `${ hello } `.repeat(3);
  // }
};