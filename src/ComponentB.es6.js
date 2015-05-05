import 'core-js/shim';

export default class ComponentB {

  constructor( name ) {
    console.log('ComponentB constructed!');
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
