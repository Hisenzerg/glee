$(function () {
  
  $(".star").rateYo({
    starWidth: "11px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    readOnly: true,
    spacing: "9px",
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.top-slider__items').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  var mixer = mixitup('.products__content');
  
  var mixer = mixitup('.design__content');

});

