$(function () {
  $('.menu__btn').on('click', function () {
    $('.header__inner').toggleClass('header__inner--active');
  });

  $('.header__actions-link--open').on('click', function () {
    $('.header__actions').toggleClass('header__actions--active');
  });

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