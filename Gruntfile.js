/*
 * grunt-speck
 *
 *
 * Copyright (c) 2015 Nick Balestra
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    speck: {
      build: {
        options: {
          testFW: 'jasmine',
          specName: '--testSpec',
          logs: true
        },
        files: {
          'srcSpecs/': ['test/fixtures/**/*.js']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    },

    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['srcSpecs/**/*.js']
    },

    watch: {
      scripts: {
        files: ['test/fixtures/**/*.js'],
        tasks: ['speck', 'tape'],
        options: {
          spawn: false,
        },
      },
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-tape');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'speck', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
