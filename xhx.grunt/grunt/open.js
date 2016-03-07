module.exports = {

	dev: {

		path: 'http://<%= express.dev.options.hostname%>:<%= express.dev.options.port%>'

	},

	app: {

		path: 'http://<%= express.app.options.hostname%>:<%= express.app.options.port%>'

	}

};