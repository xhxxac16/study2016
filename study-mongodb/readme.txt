mongod --dbpath=D:\data\db

mongod开启命令，同时用--dbpath指定数据存放地点“db”文件夹

微软图标+R，输入cmd，输入mongo命令打开shell
默认连接test数据库

mongodb中有三元素：数据库，集合，文档，其中“集合”就是对应关系数据库中的“表”，“文档”对应“行”

 <1>  insert 操作
 数据库有了，下一步就是集合，这里就取集合名为“person”，要注意的就是文档是一个json的扩展（Bson)形式。
 db.person.insert({"name":"jack", "age":20});
 
<2> find 操作
我们将数据插入后，肯定是要find出来，不然插了也白插，这里要注意两点：
   ① “_id"： 这个字段是数据库默认给我们加的GUID，目的就是保证数据的唯一性。
   ② 严格的按照Bson的形式书写文档，不过也没关系，错误提示还是很强大的。
    db.person.find({"name":"jack"});

<3> update操作
update方法的第一个参数为“查找的条件”，第二个参数为“更新的值”
db.person.update({"name":"jack"},{"name":"jack","age":"10"})
	如果有多条{"name":"jack"}的数据，它只修改了第一条


<4> remove操作
remove中如果不带参数将删除所有数据，呵呵，很危险的操作，在mongodb中是一个不可撤回的操作，三思而后行。
db.person.remove({"name":"jack"})

db.person.count()


http://www.cnblogs.com/huangxincheng/archive/2012/02/18/2356595.html