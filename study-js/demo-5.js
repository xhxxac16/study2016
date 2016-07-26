/*
 * Created: 2016-7-22
 * Update: 2016-7-23
 * Author: Amanda
 * Lever:    demo-5
 * Description: 深入理解javascript原型和闭包（5）——instanceof
 * http://www.cnblogs.com/wangfupeng1988/p/3979533.html
 */

 function Foo(){ }
 var f1 = new Foo();
 var f = Foo();
 var c = Foo;

 console.log(f1 instanceof Foo);  //true
 console.log(f1 instanceof Object);  //true

 console.log(f instanceof Foo); //false

 console.log(f1.prototype); //undefined
 //console.log(f.prototype); //Uncaught TypeError: Cannot read property 'prototype' of undefined
console.log(c.prototype); ////Object {constructor: Foo(),__proto__: Object}
console.log(Foo.prototype); ////Object {constructor: Foo(),__proto__: Object}


 console.log(f1.__proto__); //Object {constructor: Foo(),__proto__: Object}
 //console.log(f.__proto__); //Uncaught TypeError: Cannot read property '__proto__' of undefined

 console.log(typeof f1);  //object
 console.log(typeof f);  //undefined
 console.log(typeof c);  //function


 console.log(Object instanceof Function); //true;
 console.log(Function instanceof Object); //true;
 console.log(Function instanceof Function); //true;



 //instanceof表示的就是一种继承关系，或者原型链的结构





 console.log(Function.prototype.constructor); //function Function() { [native code] }

 function Foo(){

 };
 console.log(Foo.prototype.constructor); //function Foo(){ }


var a = Function.prototype; //将Function.prototype看作一个基本对象a，此时：
console.log(a.constructor === Function); // true;
console.log(a.__proto__.constructor === Object); //true; a.__proto__指向Object.pototype



var obj = {};
console.log(obj.__proto__ == Object.prototype); //true;
console.log(obj.prototype); //undefined