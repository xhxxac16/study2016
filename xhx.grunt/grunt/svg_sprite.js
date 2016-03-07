module.exports = {
        dev             : {
			expand					: true,
            src             : ['dev/<%= package.dirName %>/images/**/*.svg'],
            dest            : 'dev/<%= package.dirName %>/_source',
            options         : {
            mode            : {
                	view			: {			// Activate the «view» mode 
						bust		: false,
						render		: {
							scss	: true		// Activate Sass output (with default options) 
						}
					},
					// symbol			: true		// Activate the «symbol» mode 
				
                }
            }
        },

};