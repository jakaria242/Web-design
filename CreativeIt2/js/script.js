//================================slider js start===============================
$(".slider").slick({
  dots: false,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 1000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  arrows: true,
  prevArrow: '<i class=" prev fa-solid fa-angle-left"></i>',
  nextArrow: '<i class=" next fa-solid fa-angle-right"></i>',
  responsive: [
    {
      breakpoint: 1399,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
//================================slider js End===============================


// counter part start

$(function () {
  $('.chart').easyPieChart({
      size: 160,
      barColor: "#ff3838",
      scaleLength: 0,
      lineWidth: 15,
      trackColor: "#373737",
      lineCap: "circle",
      animate: 3000,
  });
});

$('.counter').counterUp({
  delay: 20,
  time: 1000
});
// counter part end


// ============swiper js start==================
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// ============swiper js end====================