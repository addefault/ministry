//*
$(".scroll, .menu-modal li:not(.has-children) > a[href^='#'], .header__menu li:not(.has-children) > a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top + parseInt($(_href).css("padding-top")) - 20 +"px"});
    return false;
});