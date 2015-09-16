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
    eslint: {
      src: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= tape.files %>'
      ]
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/specs/**/*.js']
    },

    // Configuration to be run (and then tested).
    speck: {
      tape: {
        options: {
          testFW: 'tape',
          specName: '_tapeSpec',
          logs: true
        },
        files: {
          'test/fixtures/specs/': ['test/fixtures/*.js']
        }
      },
      jasmine: {
        options: {
          testFW: 'jasmine',
          specName: '_jasmineSpec',
          logs: true
        },
        files: {
          'test/fixtures/specs/': ['test/fixtures/*.js']
        }
      }
    },

    // Unit tests.
    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: ['test/specs/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-tape');

  grunt.registerTask('build', ['clean', 'speck', 'tape']);
  grunt.registerTask('test', ['eslint', 'build']);

};
