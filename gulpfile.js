var gulp = require ("gulp");
//додаткові плагіни Gulp
/*var sass = require ("gulp-sass"), //конвертує SASS в CSS
    cssnano = require ("gulp-cssnano"), //мінімізація CSS
    autoprefixer = require ('gulp-autoprefixer'), //додавання префіксів в
    //CSS для підтримки
    //старих браузерів
    imagemin = require ('gulp-imagemin'), //стиснення зображень
    concat = require ("gulp-concat"), //об'єднання файлів - конкатенація
    uglify = require ("gulp-uglify"), //мінімізація javascript
    rename = require ("gulp-rename"); //перейменування файлів*/


function html() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist'))
}

function sass() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('dist/css'))
}


exports.default = gulp.series(html);
/*function html_task(cb)
{
    pump([
        gulp.src ("app/!*.html"),
        gulp.dest ("dist")
        ],
    cb)
}
exports.html = html_task;
//об'єднання, компіляція Sass в CSS, додавання префіксів і подальша


function sass_task(cb)
{ pump([
     gulp.src ("app/sass/!*.sass"),
         concat ('styles.sass'),
         sass (),
        autoprefixer ({
            browsers: ['last2versions'],
            cascade: false
        }),
        cssnano (),
        rename ({suffix:'.min'}),
        gulp.dest ("dist/css")
    ],
    cb)
}
//об'єднання і стиснення JS-файлів

function scripts_task(cb)
    { pump([
     gulp.src ("app/js/!*.js"), //вихідна директорія файлів
        concat ('scripts.js'), // конкатенація js-файлів в один
        uglify (), //стиснення коду
        rename ({suffix:'.min'}), //перейменування файлу з
        //приставкою .min
        gulp.dest ("dist/js")
        ],
        cb)
    }// директорія продакшена

//cтискання зображень
function img_task(cb)

{ pump([
     gulp.scr ( "app/img/!*.+(jpg|jpeg|png|gif)"),
        (imagemin ({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            interlaced: true
        }))
        (gulp.dest ( "dist/img")),
],
    cb);
//відстежування за змінами у файлах
gulp.task ("watch",function () {
    gulp.watch ( "app/*.html",["html"]);
    gulp.watch ( "app/js/*.js", ["scripts"]);
    gulp.watch ( "app/sass/!*.sass",["sass"]);
    gulp.watch ( "app/img/!*.+(jpg|jpeg|png|gif)", ["img"]);
});*/
//Запуск тасків за замовчуванням
/*
gulp.task ("default",["html","sass","scripts","img","watch"]);}*/
