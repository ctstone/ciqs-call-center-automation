const gulp = require('gulp');
const replace = require('gulp-replace');

const SOURCE = '.';
const DEST = '/Source/data-science/CIQS/Product/Source/Patterns/Data/call-center-automation';

gulp.task('ciqs', () => {
  return gulp.src('+(assets|core)/**')
    .pipe(gulp.dest('', { cwd: DEST }));
});

gulp.task('arm', ['ciqs'], () => {
  return gulp.src('core/azuredeploy.json', { cwd: DEST })
    .pipe(replace(/^\s*\/\/.*$/gm, ''))
    .pipe(replace(/^\s*\/\*(\s|\S)*?\*\/\s*$/gm, ''))
    .pipe(gulp.dest('core', { cwd: DEST }));
});

gulp.task('markdown', ['ciqs'], () => {
  return gulp.src('core/md/**', { cwd: DEST })
    .pipe(replace('../../assets', '{PatternAssetBaseUrl}'))
    .pipe(gulp.dest('core/md', { cwd: DEST }));
});

gulp.task('default', ['markdown', 'arm']);