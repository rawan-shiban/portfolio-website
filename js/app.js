// ------------- Stacky navbar -------------
window.onscroll = () => {

let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY > 100);
};


const navLink = document.querySelectorAll('.linkNav')
const navActive = ('click',()=>{
    navLink.forEach(()=>{
navLink.classList.remove('active')
    })
    navLink.classList.add('active')
    

}) 
// ------------- swiper -------------
 document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // إضافة تأثيرات اختيارية
        effect: 'slide',
        speed: 600,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});