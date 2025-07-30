const thumbSlider = new Swiper(".thumb-slider", {
   spaceBetween: 5,
   slidesPerView: 4,
   watchSlidesProgress: true,
});

const mainSlider = new Swiper(".main-slider", {
   spaceBetween: 10,
   thumbs: {
      swiper: thumbSlider,
   },
});

const plus = document.querySelector('.amount-clicker__plus')
const minus = document.querySelector('.amount-clicker__minus')
const amountCounter = document.querySelector('.amount-clicker__number')
let amount = 1

plus.onclick = () => {

   amount++
   amountCounter.innerHTML = amount
}
minus.onclick = () => {
   if (amount > 1) {
      amount--
   } else  {

   }
   amountCounter.innerHTML = amount
}

let link = document.querySelectorAll('.me-link')

link.forEach((el) => {
   el.onclick = () => {
      link.forEach((item) => item.classList.remove('main-block-1__left-item--active'));
      document.querySelectorAll('.item').forEach(element => {
         element.classList.add('item--disabled')
      });

      if (el == link[0]) {
         document.querySelector('.item-description').classList.remove('item--disabled')
      }
      if (el == link[3]) {
         document.querySelector('.item-feedback').classList.remove('item--disabled')
      }

      el.classList.add('main-block-1__left-item--active');
   }
});

window.onresize = () => {
   if (window.innerWidth <= 660) {
      document.querySelector('.item-feedback').classList.remove('item--disabled')
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
});

window.addEventListener('resize', () => {
   initSwiper4();
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
const swiper6 = new Swiper('.swiper-6', {
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
      nextEl: '.swiper-button-next-6',
      prevEl: '.swiper-button-prev-6',
   },
});