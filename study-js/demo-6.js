/*
 * Created: 2016-7-23
 * Update: 2016-7-23
 * Author: Amanda
 * Lever:    demo-6
 * Description: 深入理解javascript原型和闭包（6）——继承
 * http://www.cnblogs.com/wangfupeng1988/p/3979985.html
 */

function Foo(){}
var f1 = new Foo();
f1.a = 10;

Foo.prototype.a = 100;
Foo.prototype.b = 200;

console.log(f1.a); //10
console.log(f1.b); //200