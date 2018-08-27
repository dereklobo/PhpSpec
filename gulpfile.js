var gulp = require('gulp');
var phpspec = require('gulp-phpspec');
var run = require('gulp-run');
var notify = require('gulp-notify');

//gulp.task('default', ['test', 'watch']);

gulp.task('test',function(){
    var stream =  gulp.src('spec/**/*.php')
    //.pipe(run('clear'))
    .pipe(phpspec('',{notify:true}))
    .on('error',notify.onError({
        title:'Opps',
        message:'Your tests failed,Derek'
    }))
    .pipe(notify('All done.')); 
    //console.log('Test finsihed');
    // gulp.series('test');
    return stream;;
});

// gulp.task('watch', function() {
//     gulp.watch(['spec/**/*.php', 'src/**/*.php'], gulp.parallel('test'));
//  });

 //gulp.task('default', ['test', 'watch']);
gulp.task('watch',function(){
    //console.log('running watch');
     gulp.watch(['spec/**/*.php','src/**/*.php'],gulp.series['test']);
});



//gulp.task('default', ['test', 'watch']);
