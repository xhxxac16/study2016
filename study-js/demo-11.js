/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-11
 * Description: 深入理解javascript原型和闭包（11）——执行上下文栈
 * http://www.cnblogs.com/wangfupeng1988/p/3989357.html
 */

var a = 10,                  // 1.进入全局上下文环境
	fn,
	bar= function(x){
		var b =5;
		fn(x + b);          // 3.进入fn函数上下文环境
	}

fn = function(y){
	var c = 5;
	console.log(y+c);
}

bar(10);                     // 2.进入bar函数上下文环境





// 因为之前看到过闭包的应用 输出Li的索引
// <ul id="list">
// 	<li>we</li>
// 	<li>sdf</li>
// 	<li>cx</li>
// 	<li>h</li>
// 	<li>z</li>
// </ul>
// var list = document.getElementById('list');
// var e = list.getElementsByTagName('li');
// var i = 0;
// for(; i < e.length; i++){
// 	e[i].onclick = function(){
// 		console.log(i);
// 	}
// }

// onclick事件是一个异步回调函数的指针，只有当事件执行时才会调用该函数function(){console.log(i); }（例如在元素上执行鼠标点击事件）
// e[i].onclick是为每一个节点赋值一个onclick事件（只是赋值，只有对应的事件发生后才会执行对应的事件函数），所以在执行
// function(){ console.log(i);}
// 这个函数时，循环已经结束，i的值已变为5，故点击每个<li>节点，弹出的值是一样的


// 然后我自己弄了个可以正常输出但具体什么原因怎么实现的 理解不了
// for(; i < e.length; i++){
// 	(function(a){
// 		e[i].onclick = function(){
// 			console.log(a);
// 		}
// 	})(i);
// }
// 此段代码与下面的代码是等价的
// for(;i<e.length;i++){
// 	var Fn=function(a){
// 		console.log(a);
// 	}
// 	Fn(i);
// }
// 如博主所说循环时每次调用Fn函数时，都会申请新的内存空间，故调用多次，会申请多次内存空间， 每次申请后会将当前i的值赋值给新申请内存空间a参数，而第一段代码i在内存中只会申请1次内存空间，每次更改时都是更改该内存空间的值，调用时也是调用该内存空间的值

// 这是一个很经典的共享作用域问题。在你给出的两个例子中，onclick = function(){}，这个function需要获取上层作用域的变量，第一个要获取上层作用域的i，第二个要获取上层作用域的a。
// 第一个例子中，i在执行完for循环之后，已经变化了，所以在点击触发事件的时候，function去获取外部作用的i，是获取变化之后的。
// 第二个例子中，每次for循环都会创建一个新的作用域来存储a，所以每个a都是不一样的，虽然i最后还是累加变化了，但是在内存中，多个作用域下有多个a的值，所以在不同的li发生点击事件时，获取的a是不同的。

