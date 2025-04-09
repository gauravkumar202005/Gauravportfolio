// Swiper
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  pagination: {
      el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  breakpoints: {
      // when window width is >= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
          slidesPerView: "auto",
          spaceBetween: 20
      }
  }
});

// GSAP Animations
function initAnimations() {
  var mainText = document.querySelector(".main .style-text");
  if (window.innerWidth < 768) {
      gsap.from(mainText, {
          y: 50, // Adjusted for mobile
          duration: 1.5,
          opacity: 0,
          delay: 0.4,
      });
  } else {
      gsap.from(mainText, {
          y: 100,
          duration: 1.5,
          opacity: 0,
          delay: 0.4,
      });
  }
}

// Call the function initially and on resize
initAnimations();
window.addEventListener('resize', initAnimations);
