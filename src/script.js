var swiper = new Swiper(".swipper-sliding-one", {
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  }
});

var swiper = new Swiper(".swiper-sliding-second", {
  slidesPerView: 4,
  centeredSlides: true,
  loop: true,
  speed: 1000,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var swiper = new Swiper(".swiper-slide-third", {
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  }
});

const hamburger = document.querySelector(".burgerHam");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const bgSignature = document.querySelector(".bgSign");

hamburger.addEventListener("click", (e) => {
  navbar.classList.toggle("active");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  bgSignature.classList.toggle("active");
  console.log(e);
});
