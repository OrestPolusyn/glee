$(function () {


    $('.shop-inner__btn').on('click', function () {
        $('.shop-inner__icon').removeClass('shop-inner__icon--active');
        $(this).children().addClass('shop-inner__icon--active');
    });


    $('.button-list').on('click', function () {
        $('.product__items').addClass('product__items--list');
    });

    $('.button-grid').on('click', function () {
        $('.product__items').removeClass('product__items--list');
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

    $('.product-card__star').rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
        spacing: "13px"
    });

    $('.filter-price__choose').ionRangeSlider({
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
            control: '.product__nav .filter__btn'
        },
        animation: {
            duration: 100
        }
    });

    var mixerProducts = mixitup('.design__products', {
        selectors: {
            control: '.design__nav .filter__btn'
        },
        animation: {
            duration: 300
        }
    });


});