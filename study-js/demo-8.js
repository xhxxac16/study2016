/*
 * Created: 2016-7-25
 * Update: 2016-7-27
 * Author: Amanda
 * Lever:    demo-8
 * Description: 深入理解javascript原型和闭包（8）——简述【执行上下文】上
 * http://www.cnblogs.com/wangfupeng1988/p/3986420.html
 */

console.log(a);
var a;
var a = 10;


console.log(this);  // Window{top: Window, window: Window}


console.log(f1);  //function f1(){}
function f1(){}  //函数声明

console.log(f2); //undefined
var f2 = function(){}; //函数表达式


// 变量、函数表达式——变量声明，默认赋值为undefined;
// this——赋值;
// 函数声明——赋值;
// 这三种数据的准备情况我们称之为“执行上下文”或者“执行上下文环境”
// 上面的所有例子都是在全局环境下执行的。
// 其实，javascript在执行一个代码段之前，都会进行这些“准备工作”来执行上下文。这个“代码段”其实分三种情况——全局，函数体，eval代码。


// 首先全局代码是一种，直接写到<script>标签里面的
// <script>
// 代码段...
// </script>

// 其次，eval代码接收的也是一段文本形式的代码;eval不推荐使用
// eval("alert(123");

// 最后，函数体是代码段是因为函数在创建时，本质上是new Function（...)得来的，其中需要传入一个文本形式的参数作为函数体
function fn(x){
	console.log(x+5);
}

var fn = new Function("x", "console.log(x+5)");

// "true"和"false"这不过是两个字符串而已，作为字符串来讲他们是一样的，不具有任何Boolean意义，当然都是true。
// 如果想把"false" -> false，把"true"->true，用if判断就可以，不能用!!