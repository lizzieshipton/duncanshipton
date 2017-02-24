module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bump: {
      options: {
        files: ['package.json'],
        commit: false
      }
    },
    env : {
      options : {
          /* Shared Options Hash */
      },
      dev: {
        NODE_ENV: 'development'
      },
      prod : {
        NODE_ENV : 'production',
        banner: '<%= pkg.name %><%= pkg.version %><%= grunt.template.today("dd-mm-yyyy") %>'
      }
    },
    preprocess : {
      dev : {
        src : 'client/app/indexDev.html',
        dest : 'client/index.html'
      },
      prod : {
        src : 'client/app/index.html',
        dest : 'build/dist/<%= pkg.name %>/index.html',
      }
    },
    eslint: {
      src: ['client/app/**/*.js', 'server/**/*.js', 'spec/**/*.js', 'db/**/*.js', 'Gruntfile.js'],
      options: {
        config: '.eslintrc.json'
      }
    },
    copy: {
      main: {
        expand: true,
        cwd: 'client/bower_components/',
        src: ['**'],
        dest: 'build/dist/<%= pkg.name %>/bower_components/',
      },
    },
    traceur: {
      options: {
        copyRuntime: 'build/dist/<%= pkg.name %>/'
      },
      custom: {
        files: [{
          expand: true,
          src: ['client/app/app.js', 'client/app/**/*.js', 'server/**/*.js', 'db/**/*.js'],
          dest: 'build/tmp/es5'
        }]
      }
    },
    ngtemplates: {
      duncanApp: {
        cwd: 'client/app',
        src: '**/*.html',
        dest: 'build/tmp/templates.js'
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['build/tmp/es5/client/app/app.js', 'build/tmp/es5/client/app/**/*.js', 'build/tmp/templates.js'],
        dest: 'build/tmp/<%= pkg.name %>.js'
      },
      css: {
        src: 'client/styles/*.css',
        dest: 'build/tmp/<%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/* <%= env.prod.banner %>   */\n'
      },
      dist: {
        files: {
          'build/dist/<%= pkg.name %>/<%= pkg.name %>.min.js': '<%= concat.dist.dest %>'
        }
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [
          {
            src: '<%= concat.css.dest %>',
            dest: 'build/dist/<%= pkg.name %>/<%= pkg.name %>.min.css'
          }
        ]
      }
    },
    clean: {
      dev: ['build'],
      prod: ['build/tmp']
    },
    watch: {
      dev: {
        files: [
          'client/**/*.*',
          'server/**/*.*',
          'db/**/*.*',
          'Gruntfile.js',
          '.eslintrc.json',
          'package.json',
          '.config',
          '.env',
          'bower.json'],
        tasks: 'dev'
      },
      prod: {
        files: ['client/**/*.*', 'server/**/*.*', 'db/**/*.*'],
        tasks: 'prod'
      }
    }
  });
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('dev', ['env:dev', 'preprocess:dev', 'eslint', 'clean:dev']);
  grunt.registerTask('prod', ['env:prod', 'preprocess:prod', 'bump', 'eslint', 'copy', 'traceur', 'ngtemplates', 'concat', 'uglify', 'cssmin', 'clean:prod']);
};
