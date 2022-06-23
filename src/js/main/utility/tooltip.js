function logosTooltips() {
    if(window.matchMedia('(min-width: 1260px)').matches) {
        $('.tooltip-trigger').mouseover(function() {
            $(this).siblings().find('.tooltip').fadeOut();
            $(this).find('.tooltip').fadeIn();
        });     
    }
}
logosTooltips();
$(window).resize(logosTooltips);