const gulp = require("gulp")
const webp = require("gulp-webp")

function convertWebpImage() {
  return gulp
    .src("../src/img/**/*.{jpg,jpeg,png}")
    .pipe(webp())
    .pipe(gulp.dest("../dist/img"))
}

const build = gulp.parallel(convertWebpImage)

exports.convertWebpImage = convertWebpImage

exports.default = build
