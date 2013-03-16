module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee');

	this.pageTitle = 'hoge';

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
		},
		jade: {
      my_target: {
			  files: {
				  'html/index.html': ['jade/index.jade']
				},
				options: {
				  locals: {
					  'pageTitle': 'Grunt.js test'
					}
				}
			}
		},
		htmlmin: {
		  my_target: {
			  files: {
				  'build/index.html': 'html/index.html'
				}
			}
		}
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('test', ['coffee', 'uglify', 'less', 'cssmin', 'jade', 'htmlmin']);
}
