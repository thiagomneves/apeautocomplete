const gulp 				= require("gulp");
const babel				= require('gulp-babel');
const sass 				= require("gulp-sass");
const htmlmin 		= require("gulp-htmlmin");
const notify 			= require("gulp-notify");
const uglify 			= require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const del 				= require("del");

/* Tasks cached */
gulp.task("cache:css", function () {
  del("./dist/css/ape.css")
});

gulp.task("cache:js", function () {
  del("./dist/js/ape.js")
});

/* Task compile scss to css */
gulp.task("sass", ['cache:css'], function () {
  return gulp.src("./src/scss/ape.scss")
    .pipe(sass({
      outPutStyle: 'compressed'
    }))
    .on('error', notify.onError({
      title: "erro scss",
      message: "<%= error.message %>"
    }))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream());
});

/* Task minify html */
gulp.task("html", function () {
  return gulp.src("./src/index.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
});

/* Task minify js */
gulp.task("js", ['cache:js'], function () {
  return gulp.src("./src/js/ape.js")
    .pipe(babel({ presets: ['es2015'] })) // compatibilizar para ES5
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"))
    .pipe(browserSync.stream());
});

/* Task server local */
gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  /* Watch */
  gulp.watch("./src/scss/**/*.scss", ['sass']);
  gulp.watch("./src/components/bootstrap/scss/**/*.scss", ['sass']);
  gulp.watch("./src/js/**/*.js", ['js']);
  gulp.watch("./src/index.html", ['html']);
});

gulp.task("default", ["sass", "html", "js", "server"]);