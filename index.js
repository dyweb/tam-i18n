var i18n = require('gulp-html-i18n');

module.exports = function (tam, assets, gulp) {

  if (tam.version < '0.4.0') {
    tam.log.warn('Tam-i18n supports only tam>=0.4.0 rather than tam@' + tam.version + '.');
    return;
  }

  var assets = tam.read(assets);
  var linked = tam.read(assets.linked);
  var option = assets.plugins['tam-i18n'];

  return gulp.src(option.src)
    .pipe(i18n(option))
    .pipe(gulp.dest(option.dest));

};
