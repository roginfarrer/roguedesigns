var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass')
var prefix      = require('gulp-autoprefixer');
var minifyCSS   = require('gulp-minify-css');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

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
gulp.task('browser-sync', ['sass', 'imagemin', 'jekyll-build'], function() {
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
	return gulp.src('_assets/scss/**/*.scss')
		.pipe(sass({
			includePaths: ['scss'],
			onError: browserSync.notify
	}).on('error', sass.logError))
		.pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7"))
		.pipe(minifyCSS())
		.pipe(gulp.dest('_site/assets/css'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('assets/css'));
});

/*
 * Minify images in build folder and produce in production folder
 */

gulp.task('imagemin', function () {
	return gulp.src('_assets/img/**/*')
		.pipe(imagemin({
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		use: [pngquant()]
	}))
		.pipe(gulp.dest('_site/assets/img'))
		.pipe(browserSync.reload({stream:true}))
		.pipe(gulp.dest('assets/img'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
	gulp.watch('_assets/scss/**/*.scss', ['sass'])
	gulp.watch(['_assets/img/**/*'], ['imagemin']);
	gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_config.yml', '**/*.html', '!_site/**/*.*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);