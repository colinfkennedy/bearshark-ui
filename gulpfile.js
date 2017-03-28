let gulp = require('gulp');
const less = require('gulp-less');
const ts = require('gulp-typescript');
const tsconfig = require('./ui/src/tsconfig.json');
const _ = require('lodash');

gulp = require('gulp-help')(gulp);

/* Typescript */

gulp.task('ts:server', function() {
  return typescript('server', 'server');
});

gulp.task('ts:ui', function() {
  return typescript('ui', 'ui');
});

gulp.task('ts', ['ts:ui', 'ts:server']);

gulp.task('watch:ui', () => {
  gulp.watch('ui/src/**/*.ts', ['ts:ui']);
});

/* Less */

gulp.task('less', () => {
  gulp.src('ui/src/main.less')
  .pipe(less())
  .pipe(gulp.dest('ui/src/'));
});

gulp.task('watch:less', () => {
  gulp.watch('ui/src/main.less', ['less']);
});

/* Main build files */
gulp.task('build', ['ts', 'less']);

gulp.task('build:watch', ['watch:ui', 'watch:less']);

// Helper functions
function typescript(source, destination) {
  return gulp.src(`${source}/**/*.ts`)
    .pipe(ts(_.extend(tsconfig.compilerOptions, {
      outDir: `${destination}`,
    })))
    .js.pipe(gulp.dest(`${destination}/`));
}
