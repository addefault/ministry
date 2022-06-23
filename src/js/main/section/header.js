$(window).scroll(function() {
    if($(this).scrollTop() > 200 && window.matchMedia('(min-width: 1260px)').matches) {
        $('header.header').addClass('header--fixed container');
    } else {
        $('header.header').removeClass('header--fixed container');
    }
});