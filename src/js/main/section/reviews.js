const ReviewsSlider = new Swiper('.reviews__slider', {
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
            slidesPerView: 3,
            slidesPerGroup: 2.5,
            spaceBetween: 40,
            pagination: false,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }
        }
    }
});
