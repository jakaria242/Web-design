// banner slider start===================
$('.banner_slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
  nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
  fade: true,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        dots: false,
        slidesToScroll: 1,
      }
    }
  ]
});
// banner slider end===================

// service slider start===================

$('.service_slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true,
  verticalSwiping: true,
  prevArrow: '<i class="fas fa-chevron-up up"></i>',
  nextArrow: '<i class="fas fa-chevron-down down"></i>',
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
    }
  }
]
});
// service slider end===================

// team slider start===================

$('.img_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  vertical: true,
  centerMode: true,
  centerPadding: "0",
  focusOnSelect: true,
  verticalSwiping: true,
  prevArrow: '<i class="fas fa-chevron-up up"></i>',
  nextArrow: '<i class="fas fa-chevron-down down"></i>',
  asNavFor: '.details_slider',
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      vertical: false,
    }
  },
  {
    breakpoint: 576,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      vertical: false,
    }
  }
]
});
// team slider end===================

// team slider start===================

$('.details_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.img_slider',
});
// team slider end===================

// counter js  start===================
$('.counter').counterUp({
  delay: 10,
  time: 1000
});
// counter js  end===================

// counter js  end===================
$(document).ready(function(){
  $('.venobox').venobox(); 
});
// counter js  end===================

// bottom slider start===================
$('.bottom_slider_item').slick({
  arrows: false,
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
      }
    }
  ]
});
// bottom slider end===================