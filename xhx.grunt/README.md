--------------------------------------------------
安装grunt运行需要的模块
清除代理npm config delete http-proxy

进入根目录，shift+右键，点击打开命令行窗口，输入：
npm install

或着

npm install grunt --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-express --save-dev
npm install grunt-open --save-dev
npm install load-grunt-config --save-dev
npm install load-grunt-tasks --save-dev
npm install time-grunt --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-svg-sprite --save-dev

--------------------------------------------------
dev 所在大项目组的前端开发目录 

dev/carlib1 大项目下的各个小项目的目录

dev/carlib1/css 小项目css
dev/carlib1/js 小项目js
dev/carlib1/images 小项目images
dev/carlib1/index.html 小项目html页，起名最好为index.html,grunt里配置的open打开页http://localhost:9022/直接就可以打开该页
--------------------------------------------------
app 所在大项目组的前端发布目录 

其余跟dev目录结构一致
--------------------------------------------------
怎样设置grunt的开发目录为自己的小项目目录

修改package.json文件中的dirName为自己的小项目目录名
--------------------------------------------------
目前支持的任务(同样需要进入根目录，shift+右键，点击打开命令行窗口)

开发
输入：grunt dev

发布
输入：grunt app



