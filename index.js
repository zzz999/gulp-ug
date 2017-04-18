var gutil = require('gulp-util');
var through = require('through2');
//https://github.com/FF-Mercurial/ug 使用这位大牛的压缩方法
var ug = require('./src/index');
module.exports = function () {
    return through.obj(function (file, enc, cb) {
        // 如果文件为空，不做任何操作，转入下一个操作，即下一个 .pipe()
        if (file.isNull()) {
            this.push(file);
            return cb();
        }
        // 插件不支持对 Stream 对直接操作，跑出异常
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(PLUGIN_NAME, 'Streaming not supported'));
            return cb();
        }
        file.contents = new Buffer(ug(file.contents.toString()));
        // 下面这两句基本是标配啦，可以参考下 through2 的API
        this.push(file);
        cb();
    });
};