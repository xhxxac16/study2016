module.exports = {

	app: {

		files: [{

			expand: true,

			cwd: 'dev/<%= package.dirName %>/css/',

			src: ['**/*.css', '**/!*.min.css'],

			dest: 'app/<%= package.dirName %>/css/',

			//ext: '.min.css',

			extDot: 'last'

		}]

	}

};