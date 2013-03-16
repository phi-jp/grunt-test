module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
  	buildDir: "build",

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
          '<%= buildDir %>/test.min.js': [ 'js/test.js' ]
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
            dest: '<%= buildDir %>/test.min.css'
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
          '<%= buildDir %>/index.html': 'html/index.html'
        }
      }
    }
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-contrib/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }

  grunt.registerTask('test', ['coffee', 'uglify', 'less', 'cssmin', 'jade', 'htmlmin']);
}
