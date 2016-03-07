module.exports = {

	options: {
        banner: '/*! <%= package.name %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n'+
      '*<%= package.license %> Copyright (c) <%= grunt.template.today("yyyy") %>\n' +      
      '*<%= package.author %>\n*/\n', 

		mangle: {

			except: ['require']

		}

	},

	app: {

		files: [

			{

				expand: true,

				cwd: 'dev/<%= package.dirName %>/js/',

				src: ['**/*.js', '**/!*.min.js'], 

				dest: 'app/<%= package.dirName %>/js/', 

				// ext: '.js',

				extDot: 'last'

			}

		]

	}

};