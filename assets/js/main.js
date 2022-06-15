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