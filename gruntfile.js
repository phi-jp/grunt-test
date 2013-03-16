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
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('test', ['coffee', 'uglify']);
}
