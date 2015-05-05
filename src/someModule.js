import 'core-js/shim';

export default class Person {

  constructor( name ) {
    this.name = name;
  }

  sayHello() {
    return `Hello ${foo} ${ this.name }!`;
  }

  sayHelloThreeTimes() {
    let hello = this.sayHello();
    return `${ hello } `.repeat(3);
  }
}
