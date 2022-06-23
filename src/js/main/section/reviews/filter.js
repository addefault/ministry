$('.reviews-filter__item').click(function() {
    $(this).closest('.reviews-filter__container').find('.reviews-filter__item.active').removeClass('active');
    $(this).addClass('active');
});
function platformsSlidesInit() {
    if(window.matchMedia('(min-width: 1260px)').matches) {
        const PlatformsSlider = new Swiper('.reviews-filter__slider', {
            slidesPerView: 6.5,
            spaceBetween: 20,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }
        });    
    }    
}
platformsSlidesInit();
$(window).resize(platformsSlidesInit);
