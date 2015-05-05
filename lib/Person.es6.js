"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

require("core-js/shim");

var Person = (function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _prototypeProperties(Person, null, {
    sayHello: {
      value: function sayHello() {
        return "Hello " + this.name + "!";
      },
      writable: true,
      configurable: true
    },
    sayHelloThreeTimes: {
      value: function sayHelloThreeTimes() {
        var hello = this.sayHello();
        return ("" + hello + " ").repeat(3);
      },
      writable: true,
      configurable: true
    }
  });

  return Person;
})();

module.exports = Person;