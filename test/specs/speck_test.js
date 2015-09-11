var test = require('tape');
var grunt = require('grunt');

test('build tape specs', function(t) {
  t.plan(2);
  var actual_base = grunt.file.read('test/fixtures/specs/base_tapeSpec.js');
  var expected_base = grunt.file.read('test/fixtures/expected/base_tapeSpec.js');
  var actual_edge = grunt.file.read('test/fixtures/specs/edgeCases_tapeSpec.js');
  var expected_edge = grunt.file.read('test/fixtures/expected/edgeCases_tapeSpec.js');

  t.equal(actual_base, expected_base, 'the build should be correct');
  t.equal(actual_edge, expected_edge, 'the build should be correct');
});

test('build jasmine specs', function(t) {
  t.plan(2);
  var actual_base = grunt.file.read('test/fixtures/specs/base_tapeSpec.js');
  var expected_base = grunt.file.read('test/fixtures/expected/base_tapeSpec.js');
  var actual_edge = grunt.file.read('test/fixtures/specs/edgeCases_tapeSpec.js');
  var expected_edge = grunt.file.read('test/fixtures/expected/edgeCases_tapeSpec.js');

  t.equal(actual_base, expected_base, 'the build should be correct');
  t.equal(actual_edge, expected_edge, 'the build should be correct');
});
