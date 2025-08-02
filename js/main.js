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
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

maxsulot.classList.add("maxsulot_hide")

maxsulot2.classList.add("maxsulot_hide")

maxsulot3.classList.add("maxsulot_hide")

hammasi.classList.add("hammasi_hide")

hammasi2.classList.add("hammasi_hide")

hammasi3.classList.add("hammasi_hide")


novinki.addEventListener("click", () => {
    product.classList.add("product_hide")
    product2.classList.add("product_hide")
    product3.classList.add("product_hide")

    hammasi.classList.add("hammasi_hide")
    hammasi2.classList.add("hammasi_hide")
    hammasi3.classList.add("hammasi_hide")
})
novinki.addEventListener("click", () => {
    maxsulot.classList.remove("maxsulot_hide")
    maxsulot2.classList.remove("maxsulot_hide")
    maxsulot3.classList.remove("maxsulot_hide")
})
aksiya.addEventListener("click", () => {
    maxsulot.classList.add("maxsulot_hide")
    maxsulot2.classList.add("maxsulot_hide")
    maxsulot3.classList.add("maxsulot_hide")
})
aksiya.addEventListener("click", () => {
    product.classList.remove("product_hide")
    product2.classList.remove("product_hide")
    product3.classList.remove("product_hide")
})
vse.addEventListener("click", () => {
    maxsulot.classList.add("maxsulot_hide")
    maxsulot2.classList.add("maxsulot_hide")
    maxsulot3.classList.add("maxsulot_hide")

    hammasi.classList.add("hammasi_hide")
    hammasi2.classList.add("hammasi_hide")
    hammasi3.classList.add("hammasi_hide")

    product.classList.add("product_hide")
    product2.classList.add("product_hide")
    product3.classList.add("product_hide")
})
vse.addEventListener("click", () => {
    maxsulot.classList.add("maxsulot_hide")
    maxsulot2.classList.add("maxsulot_hide")
    maxsulot3.classList.add("maxsulot_hide")

    product.classList.add("product_hide")
    product2.classList.add("product_hide")
    product3.classList.add("product_hide")
})
vse.addEventListener("click", () => {
    hammasi.classList.remove("hammasi_hide")
    hammasi2.classList.remove("hammasi_hide")
    hammasi3.classList.remove("hammasi_hide")
})
