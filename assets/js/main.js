(function ($) {
  "use strict";

  // data background img
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // data background color
  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });

  // branding slider
  var swiper = new Swiper(".rt-branding-slider", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,
    keyboard: {
      enabled: false,
    },
  });

  // countries slider
  var swiper = new Swiper(".rt-countries-slider", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rt-countries-next-btn",
      prevEl: ".rt-countries-prev-btn",
    },
  });

  // team slider
  var swiper = new Swiper(".rt-team-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rt-team-next-btn",
      prevEl: ".rt-team-prev-btn",
    },
  });

  // testimonials slider
  var swiper = new Swiper(".rt-testimonials-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rt-testimonials-next-btn",
      prevEl: ".rt-testimonials-prev-btn",
    },
  });

  //  blog
  var swiper = new Swiper(".rt-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".rt-blog-next-btn",
      prevEl: ".rt-blog-prev-btn",
    },
  });
})(jQuery);
