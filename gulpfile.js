
let gulp = require("gulp");
let uglify = require("gulp-uglify"); //压缩模块
let babel = require("gulp-babel"); //ES6的编译模块
let cleancss = require("gulp-clean-css");
let webserver = require("gulp-webserver");
let sass = require("gulp-sass"); //编译SCSS到CSS



gulp.task("buildJSON",()=>{
	gulp.src("./src/json-data/*.json")
		.pipe( gulp.dest("./dist/json-data") )
})


gulp.task("buildJS", ()=>{
	//只复制
	gulp.src("./src/scripts/libs/*.js")
		.pipe( gulp.dest("./dist/scripts/libs") )
	
	//编译压缩复制
	gulp.src("./src/scripts/*.js")
		.pipe(babel({
            presets: ['env']
        }))
		.pipe( uglify() )
		.pipe( gulp.dest("./dist/scripts") );
})

gulp.task("buildCSS", ()=>{
	
	gulp.src("./src/**/*.scss")
		// .pipe(cleancss())
		
		.pipe(sass().on('error', sass.logError))
		.pipe( gulp.dest("./dist") )
	
})

gulp.task("buildHTML", ()=>{
	gulp.src("./src/**/*.html").pipe( gulp.dest("./dist") );
	gulp.src("./src/pages/*.js").pipe( gulp.dest("./dist/pages"));
})

gulp.task("buildStaticResource", ()=>{
	gulp.src("./src/static/**/*.*").pipe( gulp.dest("./dist/static") );
})

gulp.task("watching", ()=>{
	gulp.watch("./src/**/*.scss", ["buildCSS"]);
	gulp.watch("./src/**/*.js", ["buildJS"]);
	gulp.watch("./src/pages/*.js",["buildHTML"]);
	gulp.watch("./src/**/*.html", ["buildHTML"]);
	gulp.watch("./src/**/*.json", ["buildJSON"]);
});




gulp.task('webserver', ["watching"], function() {
	gulp.src('dist')
		.pipe(webserver({
			livereload: true, //是否支持热部署
			
			port:8000,//
			proxies : [
				{	
					source: '/listmore', 
					target: 'https://m.lagou.com/listmore.json',
				}
			]
		}));
});

gulp.task("build", ["buildJSON","buildJS","buildHTML", "buildCSS", "buildStaticResource"])