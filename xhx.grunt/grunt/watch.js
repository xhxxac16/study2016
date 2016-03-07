module.exports = {

	options: {

		livereload: true

	},

	dev: {

		files: ['dev/<%= package.dirName %>/*.html', 'dev/<%= package.dirName %>/css/**/*.css', 'dev/<%= package.dirName %>/js/**/*.js', 'dev/<%= package.dirName %>/images/**/*.png', 'dev/<%= package.dirName %>/images/**/*.jpg', 'dev/<%= package.dirName %>/images/**/*.gif']

	},

	app: {

		files: ['dev/<%= package.dirName %>/*.html', 'dev/<%= package.dirName %>/css/**/*.css', 'dev/<%= package.dirName %>/js/**/*.js', 'dev/<%= package.dirName %>/images/**/*.png', 'dev/<%= package.dirName %>/images/**/*.jpg', 'dev/<%= package.dirName %>/images/**/*.gif']

	}

};