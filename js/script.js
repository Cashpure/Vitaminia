

const swiper = new Swiper('.swiper-1', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   draggable: false,

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
         spaceBetween: 30,
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

   navigation: {
      nextEl: '.swiper-button-next-2',
      prevEl: '.swiper-button-prev-2',
   },
});

const swiper5 = new Swiper('.swiper-5', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   slidesPerView: 2,
   spaceBetween: 30,

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
         spaceBetween: 30,
      },

   },
   direction: 'horizontal',
   loop: false,
   slidesPerView: 3,
   spaceBetween: 15,

   navigation: {
      nextEl: '.swiper-button-next-6',
      prevEl: '.swiper-button-prev-6',
   },
});

const swiper7 = new Swiper('.swiper-7', {
   // Optional parameters
   direction: 'horizontal',
   loop: false,
   slidesPerView: 2,
   spaceBetween: 15,

   breakpoints: {
      1230: {
         spaceBetween: 30,
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

let swiper3;
function initSwiper3() {
   const screenWidth = window.innerWidth;

   if (screenWidth < 768 && !swiper3) {
      swiper3 = new Swiper('.swiper-3', {
         slidesPerView: 1,
         loop: false,
         spaceBetween: 10,
      });
   } else if (screenWidth >= 768 && swiper3) {
      swiper3.destroy(true, true);
      swiper3 = undefined;
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
   initSwiper3();
   initSwiper4();
   initSwiper8();
});

window.addEventListener('resize', () => {
   initSwiper3();
   initSwiper4();
   initSwiper8();
});
