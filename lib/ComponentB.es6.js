"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

require("core-js/shim");

var ComponentB = (function () {
  function ComponentB(name) {
    _classCallCheck(this, ComponentB);

    console.log("ComponentB constructed!");
    this.name = name;
  }

  _prototypeProperties(ComponentB, null, {
    sayHello: {
      value: function sayHello() {
        return "Hello " + foo + " " + this.name + "!";
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

  return ComponentB;
})();

module.exports = ComponentB;