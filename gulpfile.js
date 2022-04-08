const { src, dest,  watch } = require('gulp');


exports.default = function() {
    return src('./src/*.html')

      .pipe(dest('./dist'));
  }


watch(['src/*.html','src/*.css'], function(cb) {
    return src('./src/*.html')
    .pipe(dest('./dist'));
  cb();
});