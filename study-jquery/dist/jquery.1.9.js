(function( window, undefined ){
	// 用一个函数域抱起来，就是所谓的沙箱
	// 在这里边var定义的变量，属于这个函数域内的局部变量，避免污染全局
	// 把当前沙箱需要的外部变量通过函数参数引进来
	// 只要保证参数对内提供的接口一致性，你还可以随意替换传进来的这个参数

	// 在ECMAScript5之前undefined都是可写的，也就是undefined可以赋值的。jQuery作者这么做的目的还有防止2B程序员对undefined进行赋值后使得代码出现了不可预料的bug。
            "use strict";
            // jQuery.A = function(){};
            // jQuery.prototype.B = function(){};


            // class jQuery(){
            //     public static A(){};
            //     public B(){}
            // }
            window.jQuery = window.$ = jQuery;


})( window );