/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-17
 * Description: 深入理解javascript原型和闭包（17）——补this
 * http://www.cnblogs.com/wangfupeng1988/p/3996037.html
 */

// http://www.cnblogs.com/wangfupeng1988/p/3988422.html 原文this的其中一种情况是构造函数的，具体的内容可以参考原文。
// 要补充的内容是，在构造函数的额prototype中，this代表着什么。

function Fn() {
	this.name = 'wangfupeng';
	this.year = 1988;
}

Fn.prototype.getName = function() {
	console.log(this.name);
}

var f1 = new Fn();
f1.getName(); //wangfupeng

// 如上代码，在Fn.prorotype.getName函数中，this指向的是f1对象。因此可以通过this.name获得f1.name的值。
// 其实，不仅仅是构造函数的prototype，即便是在整个原型链中，this代表的也都是当前对象的值




// 引用jquery中创建jquery对象的方法想请教一下你，这里面的this代表什么
var aY = function(){

	return new aY.prototype.init();
	// return aY.prototype.init();
}

aY.prototype = {
	init: function(){
		this.age = 18;
		return this;
	},
	user: function (){
		return this.name;
	},
	age: 20
}

// return new aY.prototype.init();
console.log(aY()); //init {age: 18}
console.log(aY().age); //18
console.log(aY.prototype.age); //20

// return aY.prototype.init();
console.log(aY()); //Object {age: 18}
console.log(aY.prototype.age); //18
// 用new调用的话，是把init当成构造函数来调用， 那么首先在init内部会创建一个隐含的对象并用this指向它， 所以this指向了在init中隐式创建的对象，this.age=18表示在这个隐式创建的对象上增加一个age属性，最后return this是多余的。因为构造函数默认会返回this。
// 此时aY.prototype.age不受影响。。

// 当去掉new关键字， 相当于一个​普通对象上的函数调用， this指向了init所属的对象， 即aY.prototype， this.age=18相当于aY.prototype.age=18， 和加new有质的区别。