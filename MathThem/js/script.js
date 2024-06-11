$(".burger-menu").click(function () {
    $("#hamburger-menu").addClass("hamburger-menu-active")
})
$(".hamburger-menu__close").click(function () {
    $("#hamburger-menu").removeClass("hamburger-menu-active")
})
$(".hamburger__btn2").click(function () {
    $(".hamburger-menu__menu").addClass("hamburger-menu__menu-hidden")
    $(".hamburger-menu__category").addClass("hamburger-menu__category-active")
    $(".hamburger__btn2").addClass("hamburger__btn2-style")
    $(".hamburger__btn1").removeClass("hamburger__btn1-style")
})
$(".hamburger__btn1").click(function () {
    $(".hamburger-menu__menu").removeClass("hamburger-menu__menu-hidden")
    $(".hamburger-menu__category").removeClass("hamburger-menu__category-active")
    $(".hamburger__btn2").removeClass("hamburger__btn2-style")
    $(".hamburger__btn1").addClass("hamburger__btn1-style")
})