$(function() {

    $('.slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    var mixerDesign = mixitup('.design__products', {
        selectors: {
            control: '.design .list__nav-item__link'
        },
        animation: {
            duration: 300
        }
    });

    var mixerProducts = mixitup('.product__items', {
        selectors: {
            control: '.product .list__nav-item__link'
        },
        animation: {
            duration: 300
        }
    });


});