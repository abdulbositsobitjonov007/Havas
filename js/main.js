const product = document.getElementById("product")
const product2 = document.getElementById("product2")
const product3 = document.getElementById("product3")
const maxsulot = document.getElementById("maxsulot")
const maxsulot2 = document.getElementById("maxsulot2")
const maxsulot3 = document.getElementById("maxsulot3")
const novinki = document.getElementById("novinki")
const aksiya = document.getElementById("aksiya")
const vse = document.getElementById("vse")
const hammasi = document.getElementById("hammasi");
const hammasi2 = document.getElementById("hammasi2")
const hammasi3 = document.getElementById("hammasi3")


$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        1400: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
    },
});

$(".SO-cards").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    },
});

$('.SO-cards').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
})
