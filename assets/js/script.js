$(document).ready(function () {
    new WOW().init();

    $('.slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
    })
});