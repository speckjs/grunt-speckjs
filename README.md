[![Build Status](https://travis-ci.org/speckjs/grunt-speckjs.svg?branch=master)](https://travis-ci.org/speckjs/grunt-speckjs)

# grunt-speckjs

> Comment Driven Development

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install grunt-speckjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
grunt.loadNpmTasks('grunt-speckjs');
```

## The "speck" task


### Usage Examples

#### Single Task Setup Example

In this example, the default options are to specify a target with src files, specType, and an output destination. SpeckJS will search for comments in the source files, and then output specfiles for the specified test suite.

```
grunt.initConfig({
  speck: {
    options: {
      specType: 'tape',
      specName: '--testSpec',
      logs: false
    },
    target: {
      src: ['src/*.js'],
      dest: 'test/'
    },
  },
});
```


#### Multi Task Setup Example

You can also setup SpeckJS in multitask mode, for example if you would like to have a different subtask for bulding tape test and one for jasmine tests as in the following example:

```
grunt.initConfig({
  speck: {
    tape: {
      options: {
        testFW: 'tape',
        specName: '--tape-testSpec',
        logs: true
      },
      files: {
        'test/tape/': ['src/**/*.js']
      }
    },
    jasmine: {
      options: {
        testFW: 'jasmine',
        specName: '--jasmine-testSpec',
        logs: true
      },
      files: {
        'test/jasmine/': ['src/**/*.js']
      }
    }
  },
});
```
### options

- `testFW`: the test suite for shich SpeckJS will build.
- `specName`: the file name output of the spec files `<originalfilename><specName>.js`
- `logs`: output on console success/error messages

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
