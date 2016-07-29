/*
 * Created: 2016-7-29
 * Update: 2016-7-29
 * Author: Amanda
 * Lever:    demo-12
 * Description: 深入理解javascript原型和闭包（12）——简介【作用域】
 * http://www.cnblogs.com/wangfupeng1988/p/3991151.html
 */

var i = 10;
if(i > 1){
	var name = 'wangfupeng';
}
console.log(name);


// 比如for语句：
var i;
for(i = 0; i < 10; i++){
	//....

}
console.log(i); //10


// javascript除了全局作用域之外，只有函数可以创建的作用域


console.log(b); //undefined
if(true){
console.log(b); //function b(){}
function b(){};
}


function a(c,d){
	function b(e, f){
		console.log(c);
	}
	b(c,d);
}

a(23,4);