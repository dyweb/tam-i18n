var i18n = require('gulp-html-i18n');

module.exports = function (tam, assets, gulp) {

  if (tam.version < '0.4.0') {
    tam.log.warn('Tam-HTML supports only tam>=0.4.0 rather than tam@' + tam.version + '.');
    return;
  }

  var assets = tam.read(assets);
  var linked = tam.read(assets.linked);
  var option = assets.plugins['tam-i18n'];

  var getBySuffix = function (pkg, suffix) {
    var suffixIndex = -suffix.length;
    return linked[pkg].filter(function (file) { return file.substr(suffixIndex) === suffix; });
  };
  var ReplaceToHTML = function (suffix) {
    return function (content, sBefore, pkg, sAfter) {
      return getBySuffix(pkg, suffix).map(function (file) { return sBefore + file + sAfter; }).join('');
    };
  };

  gulp.src(option.src)
    .pipe(i18n({
      langDir: './lang',
      trace: true
    }))
    .pipe(gulp.dest(option.dest));

};
