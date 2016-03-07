module.exports = {

    options: {

        optimizationLevel: 3

    },

    dist: {

        files: [

            {
                expand: true,
                cwd: 'dev/<%= package.dirName %>/images/',
                src: ['**/*.{png,jpg,jpeg}'],
                dest: 'app/<%= package.dirName %>/images/'
            }

        ]

    }

};