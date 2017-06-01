'use strict';

const lazypipe = require('lazypipe');

const sass = require('gulp-sass');
const eyeglass = require('eyeglass');
const prefix = require('gulp-autoprefixer');
const lint = require('gulp-sass-lint');
const maps = require('gulp-sourcemaps');

module.exports = lazypipe()
  .pipe(lint)
  .pipe(maps.init)
  .pipe(sass, eyeglass())
  .pipe(prefix)
  .pipe(maps.write, './maps');