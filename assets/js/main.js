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
            slidesPerView: 2,
        }
    }
});


// Show/Hide nav menu
const menu = document.querySelector('.container__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
});

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});