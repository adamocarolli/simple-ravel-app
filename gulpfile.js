const gulp = require('gulp');
const babel = require('gulp-babel');
const sourceMaps = require('gulp-sourcemaps');

const babelConfig = {
    'retainLines': true,
    'plugins': ['transform-decorators-legacy'] // add 'transform-async-to-generator' if you are using Node v6 instead of v7
  };
  
  gulp.task('transpile', function () {
    return gulp.src('src/**/*.js') // point it at your source directory, containing Modules, Resources and Routes
        .pipe(sourceMaps.init())
        .pipe(babel(babelConfig))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist'));  // your transpiled Ravel app will appear here!
  });

  gulp.task('default', ['transpile']);