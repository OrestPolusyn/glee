$(function () {

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });
    
    $('.filter-price__input').ionRangeSlider({
        type: "double",
        min: 0,
        max: 800,
        from: 100,
        to: 500,
        step: 0.01,
        prettify_enabled: true,
        prettify_separator: '.',

        onChange: function (data) {
            $('.filter-price__from').text(data.from_pretty);
            $('.filter-price__to').text(data.to_pretty);
        },
        onStart: function (data) {
            $('.filter-price__from').text(data.from_pretty);
            $('.filter-price__to').text(data.to_pretty);
        }
    });


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