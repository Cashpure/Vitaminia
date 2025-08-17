document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".cart-button");

   buttons.forEach(button => {
      const path = button.querySelector(".button-decor svg path");
      if (!path) return;

      const originalD = path.getAttribute("d");
      const squareD = "M0 0H40V40H0V0Z";

      let animationFrame;
      const duration = 200;
      let toggled = false;

      function animate(from, to, reverse = false) {
         const interpolator = flubber.interpolate(from, to);
         const start = performance.now();

         cancelAnimationFrame(animationFrame);

         function frame(now) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            path.setAttribute("d", interpolator(reverse ? 1 - t : t));

            if (t < 1) {
               animationFrame = requestAnimationFrame(frame);
            }
         }

         animationFrame = requestAnimationFrame(frame);
      }

      button.addEventListener("mouseenter", () => animate(originalD, squareD));
      button.addEventListener("mouseleave", () => animate(originalD, squareD, true));

      button.addEventListener("click", () => {
         toggled = !toggled;
         if (toggled) {
            animate(originalD, squareD);
         } else {
            animate(originalD, squareD, true);
         }
      });

      // button.addEventListener("touchstart", () => animate(originalD, squareD));
      // button.addEventListener("touchend", () => animate(originalD, squareD, true));
   });
});
const swiper = new Swiper('.swiper-1', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   draggable: false,
   slidesPerView: 'auto',
   freeMode: {
      enabled: true,
   },


   breakpoints: {
      // when window width is >= 768px
      768: {
         pagination: {
            enabled: true
         },
      },
   },

   pagination: {
      el: '.swiper-pagination-1',
      clickable: true,
      bulletClass: 'bullet-1',
      bulletActiveClass: 'bullet-1--active',
      enabled: false
   },

   autoplay: {
      delay: 3000,
   },

   centeredSlides: true,

   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
});

const swiper2 = new Swiper('.swiper-2', {
   // Optional parameters
   breakpoints: {
      1230: {
         spaceBetween: 20,
      },
      768: {
         spaceBetween: 20,
         slidesPerView: 3,
      },
      460: {
         spaceBetween: 20,
         slidesPerView: 2,
      },
      1: {
         spaceBetween: 20,
         slidesPerView: 1,
      },
   },
   direction: 'horizontal',
   loop: false,
   slidesPerView: 3,
   spaceBetween: 15,
   slidesPerView: 'auto',
   freeMode: {
      enabled: true,
   },


   navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
   },
});
const swiper3 = new Swiper('.swiper-3', {
   direction: 'horizontal',
   loop: false,
   spaceBetween: 15,
   slidesPerView: 'auto',
   freeMode: {
      enabled: true,
   },
});

const swiper5 = new Swiper('.swiper-5', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   slidesPerView: 'auto',
   spaceBetween: 20,
   freeMode: {
      enabled: true,
   },

   breakpoints: {
      1230: {
         scrollbar: {
            enabled: true
         },
      }
   },
   scrollbar: {
      el: '.swiper-scrollbar-5',
      draggable: true,
      enabled: false
   },
});

const swiper6 = new Swiper('.swiper-6', {
   // Optional parameters
   breakpoints: {
      1230: {
         spaceBetween: 20,
      },

   },
   direction: 'horizontal',
   loop: false,
   spaceBetween: 15,
   slidesPerView: 'auto',
   freeMode: {
      enabled: true,
   },


   navigation: {
      nextEl: '.swiper-button-next-6',
      prevEl: '.swiper-button-prev-6',
   },
});

const swiper7 = new Swiper('.swiper-7', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   spaceBetween: 15,
   slidesPerView: 'auto',
   freeMode: {
      enabled: true,
   },


   breakpoints: {
      1230: {
         spaceBetween: 20,
         scrollbar: {
            enabled: true
         },
      }
   },
   scrollbar: {
      el: '.swiper-scrollbar-7',
      draggable: true,
      enabled: false
   },
});

let swiper8;
function initSwiper8() {
   const screenWidth = window.innerWidth;

   if (screenWidth < 768 && !swiper8) {
      swiper8 = new Swiper('.swiper-8', {
         slidesPerView: 1,
         loop: false,
      });
   } else if (screenWidth >= 768 && swiper8) {
      swiper8.destroy(true, true);
      swiper8 = undefined;
   }
}


let swiper4;
function initSwiper4() {
   const screenWidth = window.innerWidth;

   if (screenWidth < 768 && !swiper4) {
      swiper4 = new Swiper('.swiper-4', {
         slidesPerView: 1,
         loop: false,
         spaceBetween: 10,
      });
   } else if (screenWidth >= 768 && swiper4) {
      swiper4.destroy(true, true);
      swiper4 = undefined;
   }
}

window.addEventListener('load', () => {
   initSwiper4();
   initSwiper8();
});

window.addEventListener('resize', () => {
   initSwiper4();
   initSwiper8();
});
