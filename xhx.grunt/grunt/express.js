var os = require('os');
//获取内网ip
function getLocalIP() {
    var map = [];
    var ifaces = os.networkInterfaces();
	//console.log(ifaces);
    for (var dev in ifaces) {
        if (dev.indexOf('本地连接') != -1) {
            return ifaces[dev][1].address;
        }
		return ifaces[dev][1].address;
    }
    return map;
}
module.exports = {

	dev: {

		options: {

			port: 9022,

			hostname: getLocalIP(),

			bases: ['dev/<%= package.dirName %>/'],

			livereload: true

		}

	},

	app: {

		options: {

			port: 9023,

			hostname: 'localhost',

			bases: ['app/<%= package.dirName %>/'],

			livereload: true

		}

	}

};