/*
 * Created: 2016-7-22
 * Update: 2016-7-22
 * Author: Amanda
 * Lever:    demo-5
 * Description: 深入理解javascript原型和闭包（5）——instanceof
 * http://www.cnblogs.com/wangfupeng1988/p/3979533.html
 */

 function Foo(){ }
 var f1 = new Foo();
 var f = Foo();

 console.log(f1 instanceof Foo);  //true
 console.log(f1 instanceof Object);  //true

 console.log(f instanceof Foo); //false

 console.log(f1.prototype); //undefined
 //console.log(f.prototype); //Uncaught TypeError: Cannot read property 'prototype' of undefined

 console.log(f1.__proto__); //Object {constructor: Foo(),__proto__: Object}
 //console.log(f.__proto__); //Uncaught TypeError: Cannot read property '__proto__' of undefined