const gulp = require('gulp');
const replace = require('gulp-replace');

const SOURCE = 'src';
const DEST_EXT = '/Source/data-science/CIQS/Product/Source/Patterns/Data/call-center-automation';
const DEST = '.';

gulp.task('arm', () => {
  return gulp.src('arm/**/*.json', { cwd: SOURCE })
    .pipe(replace(/^\s*\/\/.*$/gm, ''))
    .pipe(replace(/^\s*\/\*(\s|\S)*?\*\/\s*$/gm, ''))
    .pipe(gulp.dest('core', { cwd: DEST }));
});

gulp.task('markdown', () => {
  return gulp.src('md/**/*.md', { cwd: SOURCE })
    .pipe(replace('../../assets', '{PatternAssetBaseUrl}'))
    .pipe(gulp.dest('core/md', { cwd: DEST }));
});

gulp.task('default', ['markdown', 'arm']);