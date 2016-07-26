/*
 * Created: 2016-7-23
 * Update: 2016-7-23
 * Author: Amanda
 * Lever:    demo-7
 * Description: 深入理解javascript原型和闭包（7）——原型的灵活性
 * http://www.cnblogs.com/wangfupeng1988/p/3980065.html
 */

// 对象属性可以随时改动
// 对象或者函数，刚开始new出来之后，可能啥属性都没有。但是你可以过会儿加一个，过会儿加两个，非常灵活。


var obj = {a: 10, b: 20};
console.log(obj.toString()); // [object Object]

var arr = [1, 2, true];
console.log(arr.toString()); // 1, 2, true

function Foo() {}
var f1= new Foo();
Foo.prototype.toString = function(){
	return 'wangfupeng';
}

console.log(f1.toString()); //wangfupeng


// 在json2.js源码中，为Date、String、Number、Boolean方法添加一个toJSON的属性。

if(typeof Date.prototype.toJSON !== 'function') {
    Date.prototype.toJSON = function(key) {
        return isFinite(this.valueOf()) ?
                    this.getUTCFullYear() + '-' +
                    f(this.getUTCMonth() + 1)　+ '-' +
                    f(this.getUTCDate()) + 'T' +
                    f(this.getUTCHours()) + ':' +
                    f(this.getUTCMinutes()) + ':' +
                    f(this.getUTCSeconds()) + 'Z'  : null;

    };

    String.prototype.toJSON =
    Number.prototype.toJSON =
    Boolean.prototype.toJSON = function(key){
            return this.valueOf();
    };
}


