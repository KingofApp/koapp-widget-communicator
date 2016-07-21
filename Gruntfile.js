module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-nightwatch');

  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 3101,
          path: './'
        }
      }
    },
    nightwatch: {
      options: {
        // config_path: './config/nightwatch.json'
      }
    }
  });

  // Default task(s).
  grunt.registerTask('test', ['connect', 'nightwatch']);

};
