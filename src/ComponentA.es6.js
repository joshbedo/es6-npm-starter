import 'core-js/shim';

export default class ComponentA {

  constructor( name ) {
    console.log('ComponentA constructed!');
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
