const gulp = require('gulp'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('app/sass/main.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/main.js', browserSync.reload);
})

gulp.task('default', ['watch'])
