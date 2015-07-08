var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src('src/jquery.otherdropdown.js')
    .pipe(uglify({preserveComments: "some"}))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('src'));
});