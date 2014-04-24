module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: ".",
          keepalive: true,
          port: 8080
        }
      }
    }
  });
}
