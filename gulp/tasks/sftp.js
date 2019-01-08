'use strict';

module.exports = function() {
  $.gulp.task('sftp', function() {
    return $.gulp.src($.config.root + '/**/*.*')
    .pipe($.gp.sftp({
        host: '',
        user: '',
        pass: '',
        remotePath: ''
    }));
  })
};
