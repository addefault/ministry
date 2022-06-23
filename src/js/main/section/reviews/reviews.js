const FullReviewsSlider = new Swiper('.reviews-reviews__slider', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    watchOverflow: true,
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1440: {
            enabled: false
        }
    }
});