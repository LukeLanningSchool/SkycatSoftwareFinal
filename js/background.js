// JavaScript source code
$(document).ready(function () {
    // set the background size to the height of the document
    var h = $(document).height();
    $('header').css('background-size', 'auto ' + h*2.5 + 'px')

    var scr = $(window).scrollTop();
    $('header').css('background-position', '50% -' + scr + 'px');

    // scrolling set
    $(window).scroll(function (e) {        
        var scr2 = $(window).scrollTop();
        $('header').css('background-position', '50%' + (200 + scr2 *-1) + 'px');
    });

    window.addEventListener('resize', function (event) {
        // do stuff here
        var h2 = $(document).height();
        $('header').css('background-size', 'auto ' + h2*2.5 + 'px')
    });
        
});