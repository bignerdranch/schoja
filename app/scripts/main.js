require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here

    $(".toldya").on("click", function(){
        $('.ben-affleck-container').show();
        $('.dim').css('opacity', '0.4');

    });

    $(".schoja").on("click", function(){
        $('.ben-affleck-container').hide();
        $('.dim').css('opacity', '1.0');

    });

    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});