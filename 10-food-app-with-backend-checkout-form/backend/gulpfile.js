const gulp = require('gulp');   
const buildDir = './build';
var del = require('del');

gulp.task('copyYaml', () => gulp.src('src/api/openapi.yaml').pipe(gulp.dest(`${buildDir}/api`)));
gulp.task('clean', () => {
    return del([
        'build/api/*'
    ]);
});
gulp.task('copyFiles', gulp.series(['clean', 'copyYaml']));