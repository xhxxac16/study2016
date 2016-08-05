/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-13
 * Description: 深入理解javascript原型和闭包（13）-【作用域】和【上下文环境】
 * http://www.cnblogs.com/wangfupeng1988/p/3991995.html
 */

var a =10,
	b = 20;

function fn(x) {
	var a= 100,
		c = 300;
	function bar(x){
		var a =1000,
			d = 4000;
	}

	bar(100);
	bar(200);
}

fn(10);