module.exports = function(grunt) {
  grunt.initConfig({
    coffee: {
      app: {
        src: [ 'coffee/test.coffee' ],
        dest: 'js/test.js',
        options: {
        }
      },
    },
    uglify: {
      my_target: {
        options: {
        
	      },
        files: {
          'build/test.min.js': [ 'js/test.js' ]
        },
      },
    },
		less: {
		  my_target: {
			  src: ['less/test.less'],
				dest: 'css/test.css'
			}
		},
		cssmin: {
		  my_target: {
			  src: ['css/test.css'],
				dest: 'build/test.min.css'
			}
		}
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('test', ['coffee', 'uglify', 'less', 'cssmin']);
}
