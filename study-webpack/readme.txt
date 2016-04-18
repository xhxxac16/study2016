resolve 指定可以被 require 的文件后缀。比如 Hello.jsx 这样的文件就可以直接用 require(./Hello) 引用。

loaders 指定 jsx-loader 编译后缀名为 .jsx 的文件，建议给含有 JSX 的文件添加 .jsx 后缀，当然你也可以直接使用 .js 后缀， 相应的 test 配置正则要修改匹配就是。


监听编译: webpack -d --watch

https://segmentfault.com/a/1190000003768578
一、 npm init 会自动生成 package.json
二、npm install webpack --save-dev 本地安装webpack
三、npm install webpack-dev-server --save
四、npm install react --save
五、npm install babel-loader --save-dev
六、npm install babel-preset-react
运行
npm run dev

项目目录
/app
	main.js
	component.js
/build
	bundle.js (自动创建)
	index.html

package.json
webpack.config.js


package.json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  }
}
上述配置顶的意义：
1、webpack-dev-server - 在 localhost:8080 建立一个 Web 服务器
3、devtool eval - 为你的代码创建源地址。当有任何报错的时候可以让你更加精确地定位到文件和行号
4、progress - 显示合并代码进度
5、colors - 命令行中显示颜色！
6、content-base build - 指向设置的输出目录


https://fakefish.github.io/react-webpack-cookbook/index.html

加载css
npm install css-loader style-loader --save-dev

npm install sass-loader --save-dev

npm install --save-dev flowcheck-loader

安装加载器
npm install url-loader --save-dev

安装这个暴露全局加载器
npm install expose-loader --save-dev


windows下设置环境变量
SET NODE_ENV=production


console.log(process.env.NODE_ENV);

通过NODE_ENV可以来设置环境变量（默认值为development）。 一般我们通过检查这个值来分别对开发环境和生产环境下做不同的处理。可以在命令行中通过下面的方式设置这个值：

linux & mac: export NODE_ENV=production
windows:set NODE_ENV=production