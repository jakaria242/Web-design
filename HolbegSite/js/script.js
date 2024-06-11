$(function () {
    'use strict';
    new VenoBox({
        selector: '.my-video-links',
    });

    $('.comment-persion-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.comment-wrapper',
        arrows: false,
    });
    $('.comment-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        asNavFor: '.comment-persion-wrapper',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        dots: true,
    });

    $('.back-to-top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        if (scrolling > 500) {
            $('.back-to-top').fadeIn(500)
        } else {
            $('.back-to-top').fadeOut(500)
        }
        if (scrolling > 100) {
            $('.navbar').addClass('nav-fixed')
        } else {
            $('.navbar').removeClass('nav-fixed')
        }
    })
    $('#nav').onePageNav({
        currentClass: 'current',
    });
})
new WOW().init();