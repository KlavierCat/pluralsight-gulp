var gulp = require('gulp');
var args = require('yargs').argv;// enable passing argument in the command line

var $ = require('gulp-load-plugins')({lazy: true});// load plugins as is needed

// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');
// var util = require('gulp-util');
// var gulpprint = require('gulp-print');// print out all the files gulp touches
// var gulpif = require('gulp-if');// add condition

gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src([// pipe in all the source we'll be using
            './src/**/*.js',
            './*.js'
        ])
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jscs())
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'));
});

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
