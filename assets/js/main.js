//Change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('.nav').classList.toggle('window-scroll', window.scrollY > 0)
});

// show/hide faq answer

const faqs = document.querySelectorAll('.container__faq');

faqs.forEach(faq => {

    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });

});

//Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 2,

        }
    }
});


// Show/Hide nav menu
const menu = document.querySelector('.container__menu');
const menuBtn = document.querySelector('#menu-btn');
const iconBtn = document.querySelector('.uil-bars')

menuBtn.addEventListener('click', () => {
    // iconBtn === "uil-bars"
    menu.classList.toggle("isActivade");
    iconBtn.classList.toggle("uil-times");
    // icon.classList.replace("uil-bars", "uil-times")
    // closeBtn.style.display = "inline-block";
    // menuBtn.style.display = "none";
});

// Get the browser window size


function FuntionResize() {
    const widthBrowser = window.outerWidth;
    if (widthBrowser > 1024) {
        menuBtn.style.display = "none";
    } else {
        menuBtn.style.display = "inline-block";
    }
}