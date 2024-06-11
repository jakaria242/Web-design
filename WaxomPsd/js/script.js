$(function(){
//    CounterPart Start 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//    CounterPart End 

//  Claients slaider Part Start 
$('.claients_slaider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
  //  Claients slaider Part End 
//  banner text slaider Part Start 
$('.banner_slaider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
});
  //  banner text slaider Part End 
//  Service slaider part start 
  $('.service_slaider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    // Reponsive start 
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      
    ]
    // Reponsive End 
  });
  //  Service slaider part End 
//  video venebox part start 
  new VenoBox({
    selector: '.my-video-links',
});
//  video venebox part end 
// Portfolio part start 
var containerEl = document.querySelector('.potfolio_mix');

 var mixer = mixitup(containerEl);
// Portfolio part end 
// Stiky Headr Part Start 
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_name');
  }
  else {
       $('.navbar').removeClass('sticky_name');
  }
  });  
  // Stiky Headr Part End 
});