/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-9
 * Description: 深入理解javascript原型和闭包（9）——简述【执行上下文】下
 * http://www.cnblogs.com/wangfupeng1988/p/3987563.html
 */


function fn(x){
	console.log(arguments); //[10]
	console.log(x); //10
}

// fn(10);
var  a = 10;

function fn(){
	console.log(a); //a是自由变量
} //函数创建时，就确定了a要取值得作用域


function bar(f){
	var a = 20;
	f(); //打印“10”，而不是“20”
}

bar(fn);



// 执行上下文是调用函数时产生的，例如一个函数被循环调用了100次，那么在这个过程中会产生100个执行上下文环境。
// 而作用域是在函数创建时就产生的，同一个作用域下可能同时存在不同的执行上下文。