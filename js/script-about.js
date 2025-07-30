
let swiper;
function initSwiper() {
   const screenWidth = window.innerWidth;

   if (screenWidth < 500 && !swiper) {
      swiper = new Swiper('.swiper', {
         slidesPerView: 1,
         loop: false,
         spaceBetween: 10,
      });
   } else if (screenWidth >= 500 && swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
   }
}

window.addEventListener('load', () => {
   initSwiper();
});
window.addEventListener('resize', () => {
   initSwiper();
});