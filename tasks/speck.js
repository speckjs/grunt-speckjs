/*
 * grunt-speck
 * https://github.com/speckjs/speckjs/
 *
 * Copyright (c) 2015 Nick Balestra, Luke Savage, Zach Sebag, Greg Varias
 * Licensed under the MIT license.
 */

'use strict';

// TODO: require speck
// var speck = require('speck');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('speck', 'Tiny specs, great tests', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({

    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(options.separator));

      // Handle options.
      src += options.punctuation;

      // Write the destination file.
      grunt.file.write(f.dest, src);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};
