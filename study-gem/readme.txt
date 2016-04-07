https://segmentfault.com/a/1190000000375848 国内开源镜像站点汇总

$ gem sources --remove https://rubygems.org/
$ gem sources -a http://ruby.sdutlinux.org/
$ gem sources -l
*** CURRENT SOURCES ***

http://ruby.sdutlinux.org
# 请确保只有 ruby.sdutlinux.org
$ gem install rails


gem install rails -V 来查看执行过程。
$ gem sources --add https://ruby.taobao.org/ --remove https://rubygems.org/
$ gem sources -l
*** CURRENT SOURCES ***

https://ruby.taobao.org
# 请确保只有 ruby.taobao.org
$ gem install rails