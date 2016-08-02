/*
 * Created: 2016-8-1
 * Update: 2016-8-1
 * Author: Amanda
 * Lever:    demo-15
 * Description: 深入理解javascript原型和闭包（15）——闭包
 * http://www.cnblogs.com/wangfupeng1988/p/3994065.html
 */

// 但是你只需要知道应用的两种情况即可——函数作为返回值，函数作为参数传递。

// 第一，函数作为返回值
function fn(){
	var max = 10;
	return function bar(x){
		if(x > max){
			console.log(x);
		}
	};
}

var f1 = fn();
f1(15); // 15


// 第二，函数作为参数传递
var max = 10,
	fn = function(x){
		if(x >　max){
			console.log(x);
		}
	};

(function(f){
	var max = 100;
	f(15); //15
})(fn); 