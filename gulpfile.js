const gulp = require("gulp");
const tsc = require("gulp-typescript");
const browserSync = require("browser-sync");
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const project = tsc.createProject("tsconfig.json");
const mergeStream = require("merge-stream");

gulp.task("build", function () {
  return gulp
    .src(["src/**/**.ts"])
    .pipe(project())
    .js.pipe(gulp.dest("build/"));
});

gulp.task(
  "bundle",
  gulp.series("build", function () {
    let ts = browserify("build/main.js")
      .bundle()
      .pipe(source("bundle.js"))
      .pipe(gulp.dest("dist/"));
    let html = gulp.src("src/**/**.html").pipe(gulp.dest("dist"));
    return mergeStream(ts, html);
  })
);

gulp.task(
  "serve",
  gulp.series("bundle", function (done) {
    browserSync.init({
      server: {
        baseDir: "dist/",
      },
      injectChanges: true,
    });
    done();
  })
);

gulp.task(
  "default",
  gulp.parallel("serve", function () {
    gulp.watch(
      "src/*",
      gulp.series("bundle", function (done) {
        browserSync.reload();
        done();
      })
    );
  })
);
