module.exports = function(grunt) {
 
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'hello.js',
        'project1/*',
        'sla-to-breach/app.js'
      ]
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', 'jshint');
 
};

