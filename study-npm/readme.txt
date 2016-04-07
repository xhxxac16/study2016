npm init -y
直接生成默认package.json

npm init
交互式界面完成package.json


npm install/uninstall
–global可以简写成-g;
–save可以简写成-S;
–save-dev可以简写成-D
添加–save 参数安装的模块的名字及其版本信息会出现在package.json的dependencies选项中
添加–save-dev 参数安装的模块的名字及其版本信息会出现在package.json的devDependencies选

一个node package有两种依赖，一种是dependencies一种是devDependencies，其中前者依赖的项该是正常运行该包时所需要的依赖项，而后者则是开发的时候需要的依赖项，像一些进行单元测试之类的包。


npm install也可以简写成npm i，
卸载命令npm uninstall可以简写成npm un


http://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=402515723&idx=1&sn=0bc483bdbf5b13ea6b99e299923eba1d&scene=23&srcid=0329EqrOduNUL6PFnXXK1opr#rd&ADUIN=442001007&ADSESSION=1459213907&ADTAG=CLIENT.QQ.5455_.0&ADPUBNO=26550

http://realwall.cn/blog/?p=120