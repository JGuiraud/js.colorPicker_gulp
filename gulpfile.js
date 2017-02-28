var gulp = require('gulp');

var minifyJS = require('gulp-minify')
var minifyCSS = require('gulp-minify-css')
var uglify = require('gulp-uglify');


gulp.task('minify-css', function () {
    return gulp.src('./pre-css/style.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
})

gulp.task('minify-js', function () {
    return gulp.src('./js/app.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./js'))
})

gulp.task('uglify-css', function () {
    return gulp.src('./css/style.css')
        .pipe(uglify())
        .pipe(gulp.dest('css-ugly'))
})