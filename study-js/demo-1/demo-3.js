/*
 * Created: 2016-7-22
 * Update: 2016-7-22
 * Author: Amanda
 * Lever:    demo-3
 * Description: 深入理解javascript原型和闭包（3）——prototype原型
 * http://www.cnblogs.com/wangfupeng1988/p/3978131.html
 */

 function Fn() { }
 Fn.prototype.name = 'wangfupeng';
 Fn.prototype.getYear = function(){
    return 1988;
 }

// Fn是一个函数，fn对象是从Fn函数new出来的，这样fn对象就可以调用Fn.prototype中的属性。
// 每个对象斗鱼一个隐藏的属性“__proto__”，这个属性引用了创建这个函数的prototype。即：fn.__proto__===Fn.prototype
// 这里的“__proto__”成为“隐式原型”
var fn = new Fn();
console.log(fn.name);
console.log(fn.getYear());
console.log(fn.__proto__ === Fn.prototype); //true
console.log(fn.__proto__ === fn.prototype); //false
console.log(Fn.__proto__); // function(){}

// var fn = Fn();
// console.log(fn.name);Uncaught TypeError: Cannot read property 'name' of undefined
// console.log(fn.getYear());


console.log(new Object()); //__proto__:Object.prototype的属性集合
console.log(Object.prototype); //Object.prototype的属性集合

var arr = ['123', '456'];
console.log(arr.__proto__ ); //Array.prototype的属性集合
console.log(arr.prototype); //undefined
console.log(Array.prototype); //Array.prototype的属性集合


var arr = new Array();
arr[0] = '123';
arr[1] = '456';
console.log(arr.__proto__ ); //Array.prototype的属性集合
console.log(arr.prototype); //undefined
console.log(Array.prototype); //Array.prototype的属性集合