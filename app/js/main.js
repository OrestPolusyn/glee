$(function() {

    $('.slider-top').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var mixerDesign = mixitup('.product__items', {
        selectors: {
            control: '.product__nav .filter__item'
        },
        animation: {
            duration: 300
        }
    });

    var mixerProducts = mixitup('.design__products', {
        selectors: {
            control: '.design__nav .filter__item'
        },
        animation: {
            duration: 300
        }
    });


});