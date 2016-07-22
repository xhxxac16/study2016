/*
 * Created: 2016-7-22
 * Update: 2016-7-22
 * Author: Amanda
 * Lever:    demo-2
 * Description: 深入理解javascript原型和闭包（2）——函数和对象的关系
 * http://www.cnblogs.com/wangfupeng1988/p/3978035.html
 */

var fn = function(){ };
console.log(fn instanceof Object); //true


function Fn() {
    this.name = 'wangfupeng';
    this.year = 1988;
}

var fn1 = new Fn();

var obj = {a: 10, b: 20};
var arr = [5, 'x', true];

// 对象都是通过函数来创建的
// 所有对象的创建都需要通过一个构造函数，虽然通过一个语法糖可以省略掉构造函数，但构造函数是确实存在的。构造函数本身也是一个对象，我们可以称之为函数对象，函数对象也可以通过它的构造函数Function()来创建。JavaScript内置不少函数对象，如Object()、String()、Array()、Function()等，它们既是对象，也可以作为构造函数用来构造其它的对象。除此之外，我们也可以定义自己的构造函数。
var obj = new Object();
obj.a = 10;
obj.b = 20;

var arr = new Array();
arr[0] = 5;
arr[1] ='x';
arr[2] = true;


console.log( typeof Object);  //function
console.log(typeof Array);  //function

console.log( typeof obj);  //object