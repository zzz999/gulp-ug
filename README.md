# gulp-ug

gulp js 代码混淆

## 安装

    npm install gulp-ug --save-dev

## 使用

    var ug = require('gulp-ug'),uglify = require('gulp-uglify');
    gulp.task('min_js', function () {
        return gulp.src(['xxx.js',])
            .pipe(uglify())    //压缩
            .pipe(ug())
            .pipe(gulp.dest('dist'));  //输出
    });