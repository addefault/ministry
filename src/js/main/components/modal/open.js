$('[data-popup-link], .popup-link').click(function(e) {
    e.preventDefault();
    let popup;
    if($(this).prop('tagName') === 'A')
        popup = $($(this).attr('href'));
    else
        popup = $($(this).data('popup-link'));
    popup.css('display', 'flex').hide().fadeIn();
});