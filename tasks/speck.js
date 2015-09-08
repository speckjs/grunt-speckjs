/*
 * grunt-speck
 * https://github.com/speckjs/speckjs/
 *
 * Copyright (c) 2015 Nick Balestra, Luke Savage, Zach Sebag, Greg Varias
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var speck = require('speckjs');

module.exports = function(grunt) {

  grunt.registerMultiTask('speck', 'Tiny specs, great tests', function() {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      testFW: 'tape',
      specName: '--testSpec',
      logs: true
    });
    var files = this.filesSrc;
    var dest = this.files[0].dest;

    if (options.logs) grunt.log.subhead('SpeckJS:');

    if (!grunt.file.exists(dest)) {
      if (options.logs) grunt.log.error('"' + dest + '" No such directory.');
    } else {

      // Iterate over all specified file groups.
      files.forEach(function(filepath) {
        var file = {
          name: path.relative(dest, filepath),
          content: grunt.file.read(filepath)
        };

        var build = speck.build(file, options);
        var fileName = path.parse(filepath).name;
        var buildPath = dest + fileName + options.specName + '.js';

        grunt.file.write(buildPath, build);
        if (options.logs) grunt.log.oklns('Specfile Compiled in "' + buildPath + '"');
      });
    }
  });
};
