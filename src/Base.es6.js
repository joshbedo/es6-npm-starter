import 'core-js/shim';
import Pkg from '../package.json';

import ComponentA from './ComponentA.es6.js';
import ComponentB from './ComponentB.es6.js';

export default {

  // constructor( name ) {
  //   console.log(ComponentA);
  //   this.name = name;
  // }

  ComponentA,
  ComponentB,

  version() {
    return Pkg.version;
  }

  // sayHello() {
  //   return `Hello ${ this.name }!`;
  // }

  // sayHelloThreeTimes() {
  //   let hello = this.sayHello();
  //   return `${ hello } `.repeat(3);
  // }
}
