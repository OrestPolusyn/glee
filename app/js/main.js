$(function() {
    $('.slider-img__thumb').slick({
        asNavFor: '.slider-img__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false,
    })
    $('.slider-img__big').slick({
        asNavFor: '.slider-img__thumb',
        arrows: false,
        draggable: false,
        fade: true
    });

    $('.partners__list').slick({
        focusOnSelect: true,
        slidesToShow: 5,
        draggable: false,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                draggable: true,
                arrows: false,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                focusOnSelect: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                draggable: true,
                arrows: false,
                dots: false
            }
        }]
    })



    $('.product-tabs__link').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__link').removeClass('product-tabs__link--active');
        $(this).addClass('product-tabs__link--active');
        $('.product-tabs__content-box').removeClass('product-tabs__content-box--active');
        $($(this).attr('href')).addClass('product-tabs__content-box--active');
    })

    $('.menu__btn').on('click', function() {
        $('.header__inner').toggleClass('header__inner--active');
    });

    $('.header__actions-link--open').on('click', function() {
        $('.header__actions').toggleClass('header__actions--active');
    });

    $('.shop-inner__btn').on('click', function() {
        $('.shop-inner__icon').removeClass('shop-inner__icon--active');
        $(this).children().addClass('shop-inner__icon--active');
    });


    $('.button-list').on('click', function() {
        $('.product__items').addClass('product__items--list');
    });

    $('.button-grid').on('click', function() {
        $('.product__items').removeClass('product__items--list');
    });

    $(".star").rateYo({
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true
    });

    $('.product-desc__number').styler({});

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

        onChange: function(data) {
            $('.filter-price__from').text(data.from_pretty);
            $('.filter-price__to').text(data.to_pretty);
        },
        onStart: function(data) {
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

    $('.product-slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        nextArrow: '<button type = "button" class ="slick-next" ><svg width="22px" height="9px"><path d="M0.296,5.473 L0.288,5.471 L17.244,5.471 L17.144,8.329 C17.089,8.384 17.060,8.458 17.060,8.534 C17.060,8.612 17.089,8.684 17.144,8.739 L17.316,8.912 C17.371,8.967 17.443,8.996 17.520,8.996 C17.597,8.996 17.669,8.967 17.724,8.913 L21.916,4.701 C21.970,4.647 22.000,4.573 22.000,4.497 C22.000,4.420 21.970,4.347 21.916,4.293 L17.724,0.080 C17.669,0.026 17.597,-0.003 17.520,-0.003 C17.443,-0.003 17.371,0.026 17.316,0.080 L17.144,0.254 C17.089,0.307 17.060,0.380 17.060,0.458 C17.060,0.535 17.089,0.604 17.144,0.657 L17.257,3.522 L0.292,3.522 C0.133,3.522 -0.000,3.659 -0.000,3.818 L-0.000,5.188 C-0.000,5.347 0.137,5.473 0.296,5.473 Z"/></svg></button>',
        prevArrow: '<button type = "button" class ="slick-prev" ><svg  width="22px" height="9px" ><path d="M21.704,3.526 L21.712,3.529 L4.756,3.529 L4.856,0.670 C4.910,0.616 4.940,0.542 4.940,0.465 C4.940,0.388 4.910,0.315 4.856,0.261 L4.684,0.087 C4.629,0.033 4.557,0.003 4.480,0.003 C4.403,0.003 4.331,0.033 4.276,0.087 L0.084,4.298 C0.030,4.353 -0.000,4.426 -0.000,4.503 C-0.000,4.580 0.030,4.653 0.084,4.707 L4.276,8.920 C4.331,8.973 4.403,9.003 4.480,9.003 C4.557,9.003 4.629,8.973 4.684,8.920 L4.856,8.746 C4.910,8.692 4.940,8.619 4.940,8.542 C4.940,8.465 4.910,8.396 4.856,8.342 L4.743,5.478 L21.708,5.478 C21.867,5.478 22.000,5.340 22.000,5.181 L22.000,3.812 C22.000,3.653 21.863,3.526 21.704,3.526 Z"/></svg></button>'

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

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 29.773931466944383,
            lng: -95.37371271398355
        },
        zoom: 9,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#ff4400"
                    },
                    {
                        "saturation": -68
                    },
                    {
                        "lightness": -4
                    },
                    {
                        "gamma": 0.72
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon"
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [{
                        "hue": "#0077ff"
                    },
                    {
                        "gamma": 3.1
                    }
                ]
            },
            {
                "featureType": "water",
                "stylers": [{
                        "hue": "#00ccff"
                    },
                    {
                        "gamma": 0.44
                    },
                    {
                        "saturation": -33
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "stylers": [{
                        "hue": "#44ff00"
                    },
                    {
                        "saturation": -23
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                        "hue": "#007fff"
                    },
                    {
                        "gamma": 0.77
                    },
                    {
                        "saturation": 65
                    },
                    {
                        "lightness": 99
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "gamma": 0.11
                    },
                    {
                        "weight": 5.6
                    },
                    {
                        "saturation": 99
                    },
                    {
                        "hue": "#0091ff"
                    },
                    {
                        "lightness": -86
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                        "lightness": -48
                    },
                    {
                        "hue": "#ff5e00"
                    },
                    {
                        "gamma": 1.2
                    },
                    {
                        "saturation": -23
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [{
                        "saturation": -64
                    },
                    {
                        "hue": "#ff9100"
                    },
                    {
                        "lightness": 16
                    },
                    {
                        "gamma": 0.47
                    },
                    {
                        "weight": 2.7
                    }
                ]
            }
        ]
    });
}