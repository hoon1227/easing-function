var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('combine-js', ['lint-js'], function () {
	return gulp.src('/src/js/*.js')
	.pipe(concat('all.js'))
	.pipe(gulp.dest('/js'));
});

gulp.task('default', ['combine-js']);
