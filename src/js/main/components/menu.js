$('.menu-toggle').click(function() {
    $(this).toggleClass('menu-toggle--open');
    $('header.header, html').toggleClass('opened');
    $('#menu-modal').fadeToggle(400);
});
$(".menu-modal li:not(.has-children) > a").click(function(){
    $("#menu-modal").fadeOut(400);
    $(".menu-toggle").removeClass('menu-toggle--open');
});
$('.menu-modal li.has-children > a').click(function(e) {
    e.preventDefault();
    $(this).siblings('ul').slideToggle();
});
$('header.header li.has-children > a').click(function(e) {
    e.preventDefault();
});