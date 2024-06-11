$(function () {
  "use strict";
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  });

  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // wow js
  new WOW().init();
  //   scrollit js
  $.scrollIt();
});
// PreLoader animation
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  $("#preloader").delay(1500).fadeOut(1500);
});
// Back2Top
var btn = $("#b2tbutton");
$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});
btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
// Slider of our team member part
$(".testimonial-active").slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: false,
  pauseOnFocus: false,
  prevArrow: '<i class="prev fa-solid fa-caret-left"></i>',
  nextArrow: '<i class="next fa-solid fa-caret-right"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
// Slider of we worked with part
$(".slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1200,
  pauseOnHover: false,
  pauseOnFocus: false,
  slidesToShow: 9,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 9,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
