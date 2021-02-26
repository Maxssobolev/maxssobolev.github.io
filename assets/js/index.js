$(function () {
  $('.slick-slide img').height($('.slick-slide').width());

  $(window).resize(function () {
    $('.slick-slide').height($('.image-slider').width());
  });
});
