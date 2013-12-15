/*global module*/

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({

    watch: {
       files: ['modules/**/*.js', 'common/**/*.js', 'Gruntfile.js', 'config.js', 'server.js'],
       tasks: 'test'
    },
    jshint: {
      files: ['Gruntfile.js', 'server.js', '**/**/*.spec.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        globals: { require: false, __dirname: false, console: false, module: false, exports: false, describe: false, it: false }
      }
    },
    simplemocha: {
      options: {
        // globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        // grep: 'spec',
        ui: 'bdd',
        reporter: 'spec'
      },

      all: { src: ['**/*.spec.js'] }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'watch']);

  grunt.registerTask('timestamp', function() {
    grunt.log.subhead(Date());
  });

  grunt.registerTask('test', ['simplemocha']);

  grunt.registerTask('supervise', function() {
    this.async();
    require('supervisor').run(['server.js']);
  });
};
