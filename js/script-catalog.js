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


window.addEventListener('load', () => {
   initSwiper4();
   initSwiper8();
});

window.addEventListener('resize', () => {
   initSwiper4();
   initSwiper8();
   gridVar();
});