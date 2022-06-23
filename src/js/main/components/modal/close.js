
function modalClose(modal) {
    $(modal).fadeOut();
    if ($(modal).find('iframe').length) {
        setTimeout(function(){
            const iframeSrc = $(modal).find('iframe').attr('src');
            $(modal).find('iframe').attr('src', iframeSrc);
        },150);
    }
}

$(".popup__close").click(function(){
    modalClose($(this).closest('.popup'));  
});