/*
 * Created: 2016-7-20
 * Update: 2016-7-23
 * Author: Amanda
 * Lever:    demo-1
 * Description: 深入理解javascript原型和闭包（1）——一切都是对象
 * http://www.cnblogs.com/wangfupeng1988/p/3977987.html
 */
 // typeof是一元操作符
function show (x) {
    //值类型
    console.log(x);  //undefined
    console.log(typeof(10));  //number
    console.log(typeof('abc'));  //string
    console.log(typeof(true));  //boolean

    // 引用类型
    console.log(typeof(function() {}));  //function

    console.log(typeof([1, 'a', true]));  // object
    console.log(typeof({a:10, b:20}));  //object
    console.log(typeof(null));  //object
    console.log(typeof(new Number(10)));  //object
}

show();


var fn = function (){};
console.log(fn instanceof Object);  //true
console.log(typeof  fn);  // function


// obj是一个自定义的对象，其中a、b、c就是它的属性，而且在c的属性值还是一个对象，它又有name、year两个属性
var obj = {
    a: 10,
    b: function(x){
        alert(this.a + x);
    },
    c:{
        name: "wangfupeng",
        year: 1988
    }
};
console.log(obj); //Object {a: 10, b: function(x){},c: {name:,year:,__proto__:Object},__proto__:Object}
console.log(typeof obj); //Object

var fn = function(){
    alert(100);
};
fn.a = 10;
fn.b = function(){
    alert(123);
};
fn.c = {
    name: "wangfupeng",
    year: 1998
};

console.log( typeof Object);  //function
console.log( typeof String);  //function
