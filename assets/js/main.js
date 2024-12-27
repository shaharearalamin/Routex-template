(function ($) {
  "use strict";
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
  
})(jQuery);
