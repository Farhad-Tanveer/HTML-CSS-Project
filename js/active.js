$(document).ready(function () {
  $(".slider-active").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".project-active").owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".video-popup").magnificPopup({
    type: "image",
    // other options
  });
});
