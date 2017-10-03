const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('build', function () {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('utterance.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('src/**/*.js', ['babel', 'reload']);
  gulp.watch('samples/**/*.js', ['reload']);
  gulp.watch('samples/**/*.html', ['reload']);
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./samples/",
      routes: {
        "/dist": "dist",
        "/node_modules": "node_modules"
      }
    }
  })
});
