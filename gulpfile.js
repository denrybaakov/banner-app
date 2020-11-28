// const gulp = require('gulp');
const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
// const proxyMiddleware = require('http-proxy-middleware');


const fileCss = src(['./css/*.css', '!./css/*.min.css']);
const fileMinCss = src('./css/*.min.css');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const del = require('del');

const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
// const fileJs = src(['./dist/js/*.js', '!./dist/js/*.min.js']);

// let corsMiddleware = require('cors-middleware');
// let merry = require('merry');

// let mw = merry.middleware;
// let cors = corsMiddleware({
//   methods: 'GET',
//   origin: 'http://localhost:8080'
// })

// var app = merry()
// app.use(cors)
// app.route('GET', '/', homeRoute)

// function homeRoute(req, res, ctx) {
//   console.log(res.getHeader('access-control-allow-origin'));
//   ctx.send(200, { msg: 'woah cors headers are all set' });
// }


// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./",
      // middleware: function (req, res, next) {
      //   res.setHeader('Access-Control-Allow-Origin', '*');
      //   next();
      // }
    },
    port: 3999,
    cors: true,
    browser: 'google chrome',
    notify: false
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./css/**/*.css", minCss);
  watch("./js/*.js").on('change', browserSync.reload);
}


let express = require('express');
let app = express();
let mw = require('expressjs-mw');

// let allowList = [/\.*/];
// app.use(mw.crossOrigin.allowedOrigin(allowList));
let allowList = ["www.g.cn", /http:\/\/localhost*/, /\*.github.com/]
app.use(mw.crossOrigin.allowedOrigin(allowList));

// sass
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
    // .pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    // .pipe(dest("./dist/css/"))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
}

// min-css 
function minCss(done) {
  fileCss.pipe(rename({ suffix: ".min" })).pipe(cleanCss()).pipe(dest("./dist/css/"));
  // fileCss.pipe(rename({ suffix: ".min" })).pipe(cleanCss()).pipe(dest("./css/min"));
  fileMinCss.pipe(dest("./dist/css/"));
  // fileMinCss.pipe(dest("./css/min"));
  del(['./css/*.min.css']);

  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({
      ext: {
        min: '.min.js'
      }
    }))
    .pipe(dest('./dist/js/'))
  src('js/**.min.js').pipe(dest('./dist/js/'))
  del(['./dist/js/*.js', '!./dist/js/*.min.js']);

  done();
}

function html(done) {
  src('**.html').pipe(htmlmin({ collapseWhitespace: true })).pipe(dest('./dist/'))
  done();
}

function php(done) {
  src('**.php')
    .pipe(dest('./dist/'))
  src('phpMailer/**/**')
    .pipe(dest('./dist/phpMailer'))
  done();
}

function fonts(done) {
  src('./fonts/**/**')
    .pipe(dest('./dist/fonts'))
  done();
}

function imagemin(done) {
  src('img/**/**')
    .pipe(tinypng({
      key: 'qFYMGXd3TStvMGrCxXSR2KFp574TF7ht'
    }))
    .pipe(dest('./dist/img/'))

  src('img/**/*.svg')
    .pipe(dest('./dist/img/'))
  src('img/**/*.jpg')
    .pipe(dest('./dist/img/'))
  src('img/**/*.png')
    .pipe(dest('./dist/img/'))
  done();
}

exports.serve = bs;
exports.build = series(minCss, buildJS, html, php, fonts, imagemin);


