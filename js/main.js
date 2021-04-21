$(function () {
  $(".photo__slider").slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrowleft.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrowright.svg" alt=""></button>',
  });

  $(".menu__btn").on("click", function () {
    $(".header__menu-list").slideToggle();
  });
});
