var gulp = require('gulp');
var gutil = require('gulp-util');
var elm  = require('gulp-elm');

var gulpCopy = require('gulp-copy');

gulp.task('copy', function(){
  return gulp.src('src/*.html')
    .pipe(gulpCopy('dist/', {prefix: 1}));
});

gulp.task('elm-init', elm.init);
 
gulp.task('elm', ['elm-init'], function(){
  // this is required to contnue watchin in case of error 
  // https://github.com/gulpjs/gulp/issues/71
  var l = elm({}); 
  l.on('error',function(e){
    gutil.log(e.message);
    l.end();
  });
  return gulp.src('src/*.elm')
    .pipe(l)
    .pipe(gulp.dest('dist/'));  
});

gulp.task('default',['copy'],function() {
  gulp.watch('src/**/*.elm', ['elm']);
});
