/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-10
 * Description: 深入理解javascript原型和闭包（10）——this
 * http://www.cnblogs.com/wangfupeng1988/p/3988422.html
 */


// 在函数中this到底取何值，是在函数真正被调用执行的时候确定的，函数定义的时候确定不了


// 1.构造函数
// 所谓构造函数就是用来new对象的函数。其实严格来说，所有的函数都可以new一个对象，但是有些函数的定义是为了new一个对象，而有些函数则不是。另外注意，构造函数的函数名第一个字母大写（规则约定）。例如：Object、Array、Function等。

function Foo(){
	this.name = 'wangfupeng';
	this.year = 1988;
	console.log(this); //Foo {name: "wangfupeng", year: 1988}
}

var f1 = new Foo();

console.log(f1.name); //wangfupeng
console.log(f1.year); //1988




function Foo() {
	this.name = 'wangfupeng';
	this.year = 1988;

	console.log(this); //Window {external: Object, chrome: Object, document: document, f1: Foo, year: 1988…}
}

Foo(); 



// 2.函数作为对象的一个属性
// 如果函数作为对象的一个属性时，并且作为对象的一个属性被调用时，函数中的this指向该对象
var obj = {
	x: 10,
	fn: function() {
		console.log(this);   //Object {x: 10}fn: ()x: 10__proto__: Object
		console.log(this.x); // 10
	}
};

obj.fn();
// 以上代码中，fn不仅作为一个对象的一个属性，而且的确是作为对象的一个属性被调用。结果this就是obj对象。
// 注意，如果fn函数不作为obj的一个属性被调用，会是什么结果呢？
var obj = {
	x: 10,
	fn: function(){
		console.log(this); //Window {external: Object, chrome: Object, document: document, f1: Foo, obj: Object…}
		console.log(this.x);  //undeined
	}
};

var fn1 = obj.fn;
fn1();
//如以上代码，如果fn函数被赋值到了另一个变量中，并没有作为obj的一个属性被调用，那么this的值就是window，this.x为undefined


// 3.函数用call或者apply调用
// 当一个函数被call和apply调用时，this的值就取传入的对象的值。
var obj = {
	x: 10
};

var fn = function(){
	console.log(this); //Object {x: 10}
	console.log(this.x); //10
};
fn.call(obj);


// 4.全局&调用普通函数
// 在全局环境下，this永远是window，这个应该没有非议。
console.log(this === window); //true

// 普通函数在调用时，其中this也都是window
// var x = 10;
// var fn = function(){
// 	console.log(this); //Window {external: Object, chrome: Object, document: document, f1: Foo, obj: Object…}
// 	console.log(this.x); //10
// };
// fn();
// 以上代码很好理解
// 不过下面的情况你需要注意一下
var obj = {
	x: 10,
	fn: function(){
		
		function f(){
			console.log(this); //Window {external: Object, chrome: Object, document: document, f1: Foo, obj: Object…}
			console.log(this.x); //undeined
		}
		f();
	}
};
obj.fn();
// 函数f虽然是在obj.fn内部定义的，但是它仍然是一个普通的函数，this仍然指向window。