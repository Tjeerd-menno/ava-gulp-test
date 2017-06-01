'use strict';

const gulp = require('gulp');
const sass = require('../lib/sass');

gulp.task('sass', () => {
  return gulp.src('sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});