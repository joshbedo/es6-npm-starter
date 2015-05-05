"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

require("core-js/shim");

var ComponentA = (function () {
  function ComponentA(name) {
    _classCallCheck(this, ComponentA);

    console.log("ComponentA constructed!");
    this.name = name;
  }

  _prototypeProperties(ComponentA, null, {
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

  return ComponentA;
})();

module.exports = ComponentA;