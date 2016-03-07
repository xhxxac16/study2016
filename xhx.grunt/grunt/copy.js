module.exports = {

	copy_dev_html_to_pub: {

		files: [{

			expand: true,

			cwd: 'dev/<%= package.dirName %>/',

			src: ['*.html'],

			dest: 'app/<%= package.dirName %>/',

			filter: 'isFile',

			//ext: '.html',

			extDot: 'last'

		}]

	},
	copy_dev_css_to_pub: {

		files: [{

			expand: true,

			cwd: 'dev/<%= package.dirName %>/css/',

			src: ['**/*.css','**/*.css.map'],

			dest: 'app/<%= package.dirName %>/css/',

			filter: 'isFile',

			//ext: '.css.css.map',

			extDot: 'last'

			//设置（true、false）用来指定是否保持文件目录结构
			//flatten: true

		}]

	}
};