// include gulp
var gulp = require('gulp'); 
var minifyHTML = require('gulp-minify-html');
var jshint = require('gulp-jshint');
var changed = require('gulp-changed');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  gulp.src(['./src/css/*.css'])
    .pipe(concat('styles.css'))
    
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/css/'));
});


// JS concat, strip debugging and minify
gulp.task('scripts', function() {
  gulp.src(['./src/js/app.js', './src/js/*.js'])
    .pipe(concat('script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'));
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './build';

  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});

gulp.task('jshint', function() {
  gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('default', ['htmlpage', 'scripts', 'styles'], function() {
  // watch for HTML changes
  gulp.watch('./src/*.html', function() {
    gulp.run('htmlpage');
  });

  // watch for JS changes
  gulp.watch('./src/js/*.js', function() {
    gulp.run('jshint', 'scripts');
  });

  // watch for CSS changes
  gulp.watch('./src/css/*.css', function() {
    gulp.run('styles');
  });
  // watch for CSS changes
  gulp.watch('./src/css/*.scss', function() {
    gulp.run('styles');
  });
});