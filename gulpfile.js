const fs = require('fs'),
gulp = require('gulp'),
plumber = require("gulp-plumber"),
sass = require('gulp-sass'),
bulkSass = require('gulp-sass-bulk-import'),
autoprefixer = require("gulp-autoprefixer"),
sourcemaps = require("gulp-sourcemaps"),
pug = require('gulp-pug'),
browserSync = require('browser-sync').create();


var running_tasks = [
  'sass',
  'pug',
  'browser-sync'
];

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "static/"
    }
  });
});


gulp.task("pug", function() {
    gulp.src(
        ["source/pug/**/*.pug",'!' + "source/pug/**/_*.pug"]
    )
        .pipe(plumber())
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('static/'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('sass', function() {
  gulp.src(["source/scss/**/*.scss","!source/scss/**/_*.scss"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(bulkSass())
    .pipe(sass({outputStyle: "expanded", sourcemap:true}))
    .pipe(autoprefixer('last 2 versions', 'ie 8', 'ie 9'))
    .pipe(sourcemaps.write('./', {
      includeContent: false
    }))
    .pipe(gulp.dest('static/css/'))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('default', running_tasks, function() {
  gulp.watch(['source/scss/**/*.scss'], ['sass']);
  gulp.watch(['source/pug/**/*.pug'], ['pug']);
});
