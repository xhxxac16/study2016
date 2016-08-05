/*
 * Created: 2016-7-22
 * Update: 2016-7-22
 * Author: Amanda
 * Lever:    demo-4
 * Description: 深入理解javascript原型和闭包（4）——隐式原型
 * http://www.cnblogs.com/wangfupeng1988/p/3979290.html
 */

// 每个函数function都有一个prototype，即原型。每一个对象都有一个__proto__，可成为隐式原型
var obj= {};
console.log(obj.__proto__);


// 每个对象都有一个__proto__属性，指向创建该对象的函数的prototype
// 自定义函数的prototype本质上就是和var obj={}是一样的，都是被Object创建，所以它的__proto__指向的就是Object.prototype，
// 但是Object.prototype确实一个特例--它的__proto__指向的是null。



// 函数也是一种对象，函数也有__proto__。


function fn(x, y){
    return x+ y ;
}
console.log(fn(10, 20)); //30

var fn1 = new Function("x", "y", "return x + y;"); //不推荐
console.log(fn1(5, 6));  //11


//Function.prototype指向的对象，它的__proto__指向Object.prototype


//Function创建了所有的函数，包括它自己
//所有对象的隐式原型链都最终指向Object.prototype，而Object.prototype.__proto__指向了null



var a = {};
console.log(a.prototype); //undefined
console.log(a.__proto__); //Object.prototype的属性
console.log(Object.prototype); //Object.prototype的属性

var b = function(){
console.log();
};
var c =new b();
console.log(c.__proto__);//Object{constructor:function(){},__proto__:}
console.log(c.prototype);//undefined
console.log(b.prototype);//Object{constructor:function(){},__proto__:}
console.log(b.__proto__);// function(){}