var async = require('async');
var fs = require('fs');
var gulp = require('gulp');
var gulpClean = require('gulp-clean');
var gulpCleanCss = require('gulp-clean-css');
var gulpConsolidate = require('gulp-consolidate');
var gulpConnect = require('gulp-connect');
var gulpIconFont = require('gulp-iconfont');
var gulpRename = require('gulp-rename');
var gulpWatch = require('gulp-watch');


var iconFiles = './icons/*.svg';
var iconFontName = 'mf-icons';
var outputDirectory = './dist/';


gulp.task('clean', function() {
	return gulp.src(outputDirectory)
		.pipe(gulpClean());
});

gulp.task('serve', function() {
	gulpConnect.server({
		livereload: true,
		index: iconFontName + '.html',
		port: 8083,
		root: outputDirectory
	});
});

gulp.task('default', [ 'icons', 'watch:icons', 'serve' ]);

gulp.task('icons', function(done) {
	var iconStream = gulp
		.src(iconFiles)
		.pipe(gulpIconFont({
			appendCodepoints: true,
			startUnicode: '0xE900',
			prependUnicode: true,
			cssClass: 'mf-icon',
			fontHeight: 1000,
			fontName: iconFontName,
			fontPath: './fonts/',
			formats: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
			normalize: true,
			round: 10e4
		}));

	async.series([
		// Generate CSS and HTML demo files
		function handleGlyphs(callback) {
			iconStream.on('glyphs', function (glyphs, options) {
				glyphs = glyphs.map(function(glyph) {
					// Unicode character must be converted to display correctly in HTML and CSS
					glyph.unicode = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase();
					return glyph;
				});
				options.glyphs = glyphs;

				async.parallel([
					function generateCss(callback) {
						gulp.src('templates/icons.css.template')
							.pipe(gulpConsolidate('lodash', options))
							.pipe(gulpRename(iconFontName + '.css'))
							.pipe(gulp.dest(outputDirectory))
							.pipe(gulpCleanCss())
							.pipe(gulpRename({ extname: '.min.css' }))
							.pipe(gulp.dest(outputDirectory))
							.on('finish', callback);
					},
					function generateHtml(callback) {
						gulp.src('templates/icons.html.template')
							.pipe(gulpConsolidate('lodash', options))
							.pipe(gulpRename({ basename: iconFontName, extname: '.html' }))
							.pipe(gulp.dest(outputDirectory))
							.on('finish', callback);
					}
				], callback);
			});
		},
		// Output font files to fonts/ directory
		function handleFonts(callback) {
			iconStream
				.pipe(gulpConnect.reload())
				.pipe(gulp.dest(outputDirectory + 'fonts/'))
				.on('finish', callback);
		}
	], done);
});

gulp.task('watch:icons', function() {
	gulpWatch(iconFiles, function() {
		gulp.start('icons');
	});
});
