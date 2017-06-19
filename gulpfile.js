var gulp =require('gulp'),                  //基础库
	livereload = require('gulp-livereload'),//网页自动刷新(服务器控制客户端同步刷新)
	webserver = require('gulp-webserver'),   //本地服务器
	sass = require('gulp-ruby-sass'),	    //sass插件
	uglify = require('gulp-uglify'),        //js文件压缩插件
	imagemin = require('gulp-imagemin'),    //图片压缩插件
	rename = require('gulp-rename'),
	pngquant = require('imagemin-pngquant');//图片深度压缩插件

//注册任务
gulp.task("webserver",function(){
	gulp.src("./dist")   //(./代表根目录) web服务器的服务目录
		.pipe(webserver({
			livereload:true,//启动livereload(自动刷新)
			open:true    //服务器启动时自动打开网页
		}));
});

//注册html移动任务
gulp.task("html",function(){
	return gulp.src('src/**/*.html')  //指明源文件路径、并进行文件匹配
				.pipe(gulp.dest('dist'));//输出路径
});

//注册sass文件移动
gulp.task("sass",function(){
	return sass("src/sass/*.scss",{style:'compact'})
		.pipe(gulp.dest('dist/css'));
})

//注册js压缩的任务
gulp.task("js",function(){
	return gulp.src("src/js/**/*.js")
				.pipe(uglify())
				.pipe(rename({suffix:'.min'}))
				.pipe(gulp.dest("dist/js"))
})

//注册图片压缩任务
gulp.task('imagemin', function(){
  return gulp.src('src/images/**/*.{png,jpg,gif,svg}') // 指明源文件路径、并进行文件匹配
    .pipe(imagemin({
      progressive: true, 					// 无损压缩JPG图片
      svgoPlugins: [{removeViewBox: false}], // 不移除svg的viewbox属性
      use: [pngquant()] 					// 使用pngquant插件进行深度压缩
    }))
    .pipe(gulp.dest('dist/images')); 		// 输出路径
});

//监听任务
gulp.task('watch',function(){
    gulp.watch( 'src/**/*.html', ['html']) // 监听根目录下所有.html文件
    gulp.watch( 'src/**/*.scss', ['sass']) // 监听根目录下所有.scss文件
    gulp.watch( 'src/**/*.js', ['js'])     // 监听根目录下所有.js文件
    gulp.watch( 'src/images/**/*.{png,jpg,gif,svg}', ['imagemin']) // 监听根目录下所有图片文件
});
//默认任务 
gulp.task("default",["sass","js","imagemin","html","webserver","watch"]);