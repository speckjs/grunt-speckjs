# grunt-speck

> Tiny specs, great tests

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-speck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-speck');
```

## The "speck" task


### Usage Examples


In this example, the default options are to specify a target with src files, specType, and an output destination. Speck will search for comments in the source files, and then output specfiles for the specified test suite.

```js
grunt.initConfig({
  speck: {
    options: {
      specType: 'tape'
    },
    target: {
      src: ['test/fixtures/*.js'],
      dest: 'testSpecs/'
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
