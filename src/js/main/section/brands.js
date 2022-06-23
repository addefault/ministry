const BrandsSlider = new Swiper('.brands__slider', {
    slidesPerView: 2.2,
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
            slidesPerView: 2.5
        },
        1260: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            loopedSlides: 50,
            loopFillGroupWithBlank: true,
            loop: true,
            spaceBetween: 40,
            pagination: false,
            navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            }
        }
    }
});