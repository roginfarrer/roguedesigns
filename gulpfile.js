// Base
var gulp        = require('gulp'),
    cp          = require('child_process'),

// Browser Sync
    browserSync = require('browser-sync'),

// Stylesheets
    sass        = require('gulp-sass'),
    prefix      = require('gulp-autoprefixer'),
    cssMin      = require('gulp-cssnano'),
		uncss				= require('gulp-uncss'),

// Images
    imgMin      = require('gulp-imagemin'),
    pngquant    = require('imagemin-pngquant'),

// Javascript
    uglify       = require('gulp-uglify'),
//    jshint      = require('gulp-jshint')
    concat		  = require('gulp-concat'),
		rename      = require('gulp-rename'),
		sourcemaps  = require('gulp-sourcemaps'),

// HTML
    htmlMin     = require('gulp-htmlmin'),
		
// Input & Output
		input = {
			'sass': '_assets/scss/**/*.scss',
			'javascript': '_assets/js/*.js',
			'image': '_assets/img/**/*',
			'html': './_site/**/*.html',
		},

			output = {
			'stylesheets': 'assets/css',
			'javascript': 'assets/js',
			'html': './_site/',
			'image': 'assets/img'
		};

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	browserSync.notify(messages.jekyllBuild);
	return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['htmlMin', 'sass', 'imgMin', 'js', 'jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		}
	});
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */

gulp.task('sass', function () {
	return gulp.src(input.sass)
		.pipe(sass({
			includePaths: ['scss'],
			onError: browserSync.notify
	}).on('error', sass.logError))
		.pipe(prefix("last 2 versions", "> 1%", "ie 8", "ie 7"))
		.pipe(cssMin())
		.pipe(gulp.dest('_site/assets/css'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(output.stylesheets));
});

/**
 * Minify .js files
 */

gulp.task('js', function() {
	return gulp.src([input.javascript, '!_assets/js/bundle.js'])
		.pipe(sourcemaps.init())
			.pipe(concat('bundle.js'))
			.pipe(gulp.dest('_assets/js'))
			.pipe(rename('bundle.min.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(output.javascript))
		.pipe(browserSync.reload({stream:true}));
});

/**
 * Minify .html files
 */

gulp.task('htmlMin', function() {
	return gulp.src(input.html)
		.pipe(htmlMin({
			collapseWhitespace: true,
			removeComments: true,
//			conservativeCollapse: true,
//			collapseBooleanAttributes: true,
//			removeRedundantAttributes: true,
//			removeEmptyAttributes: true,
//			removeEmptyElements: true,
//			lint: false,
			minifyJS: true,
			minifyCSS: true,
			onError: browserSync.notify
		}).on('error', sass.logError))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest(output.html));
});

/*
 * Minify images in build folder and produce in production folder
 */

gulp.task('imgMin', function () {
	return gulp.src(input.image)
		.pipe(imgMin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
		.pipe(gulp.dest('_site/assets/img'))
		.pipe(gulp.dest(output.image))
		.pipe(browserSync.reload({stream:true}));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch(input.sass, ['sass']);
	gulp.watch(input.javascript, ['js'])
	gulp.watch(input.image, ['imgMin']);
	gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_config.yml', '**/*.html', '!_site/**/*.*'], ['htmlMin', 'jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);