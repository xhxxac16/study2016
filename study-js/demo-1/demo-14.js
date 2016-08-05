/*
 * Created: 2016-7-29
 * Update: 2016-8-1
 * Author: Amanda
 * Lever:    demo-14
 * Description: 深入理解javascript原型和闭包（14）——从【自由变量】到【作用域链】
 * http://www.cnblogs.com/wangfupeng1988/p/3992795.html
 */

var x = 10;
function fn(){
	var b = 20;

	console.log(x + b);  // 这里的x在这里就是一个自由变量
}



// 要到创建这个函数的那个作用域中取值——是“创建”，而不是“调用”，切记切记——其实这就是所谓的“静态作用域”
var x = 10;
function fn(){
	console.log(x);
}

function show(f){
	var x = 20;
	 (function(){
	 	f();  // 10，而不是20
	 })();
}

show(fn);



var a = 10;
function fn(){
	var b = 20;
	function bar(){
		console.log(a+ b);
	}

	return bar;
}

var x = fn(),
	b = 200;

	x();