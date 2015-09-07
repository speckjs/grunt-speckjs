/*
 * grunt-speck
 * https://github.com/speckjs/speckjs/
 *
 * Copyright (c) 2015 Nick Balestra, Luke Savage, Zach Sebag, Greg Varias
 * Licensed under the MIT license.
 */

'use strict';

var speck = require('speckjs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('speck', 'Tiny specs, great tests', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      testFW: 'tape',
      specName: '--testSpec'
    });

    var files = this.filesSrc;
    var fs = this.files;
    var errorCount = 0;
    var dest = this.files[0].dest;

    if (!grunt.file.exists(dest)) {
      grunt.log.warn('"' + dest + '" No such directory.');
    } else {

      // Iterate over all specified file groups.
      files.forEach(function(filepath) {

        if (!grunt.file.exists(filepath)) {
            grunt.log.warn('"' + filepath + '" No such file.');
        } else {
          var file = {
            name: filepath,
            content: grunt.file.read(filepath)
          };

          var build = speck.build(file, options);

          var theFile = filepath.match(/\/([^/]*)$/)[1];
          var onlyName = theFile.substr(0, theFile.lastIndexOf('.')) || theFile;

          var buildPath = dest + onlyName + options.specName + '.js';

          grunt.file.write(buildPath, build);
          grunt.log.oklns('Specfile Compiled in "' + buildPath + '"');
        }
      });
    }
  });
};
