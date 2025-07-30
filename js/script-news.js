const swiper = new Swiper('.right-swiper', {
   direction: 'vertical',
   loop: false,
   spaceBetween: 20,
   breakpoints: {

      768: {

      },
   },

   centeredSlides: true,

   scrollbar: {
      el: '.right-swiper-scrollbar',
      draggable: true,
      enabled: true
   },
});