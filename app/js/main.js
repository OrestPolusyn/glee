$(function () {

  $('.slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
  $(function () {
    var mixerDesign = mixitup('.design__products');
    var mixerDesign = mixitup(containerEl, {
      selectors: {
        target: '.blog-item'
      },
      animation: {
        duration: 300
      }
    });
  });
  var mixerProducts = mixitup('.product__items');
  var mixerProducts = mixitup(containerEl, {
    selectors: {
      target: '.product__item'
    },
    animation: {
      duration: 300
    }
  });


});