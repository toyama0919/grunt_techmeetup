module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: [
        '**/*.scss'
      ],
      tasks: ['sass',"cssmin",'concat','aoimiyazaki']
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },
    concat: {
      dist: {
        src: ['css/*.min.css'],
        dest: 'css/all.css',
      },
    },
    aoimiyazaki: {
      voice: 'earth_music_and_ecology'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-aoimiyazaki');
  grunt.registerTask('default', [ 'watch' ]);
};
