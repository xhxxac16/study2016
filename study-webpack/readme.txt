resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。

loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，建议给含有 JSX 的文件添加 .jsx 后缀，当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。


监听编译: webpack -d --watch

https://segmentfault.com/a/1190000003768578
一、 npm init 会自动生成 package.json
二、npm install webpack --save-dev 本地安装webpack




项目目录
/app
	main.js
	component.js
/build
	bundle.js (自动创建)
	index.html

package.json
webpack.config.js