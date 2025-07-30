document.querySelectorAll('.filter-toggle').forEach(toggle => {
   toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
      toggle.classList.toggle('filter-toggle--active')
   });
});

const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');

priceRange.addEventListener('input', () => {
   priceValue.textContent = priceRange.value;
});

document.querySelector('.reset-btn').addEventListener('click', () => {
   priceRange.value = 7899;
   priceValue.textContent = 7899;
});

const swiperBest = new Swiper('.swiper-best', {
   direction: 'horizontal',
   loop: false,
   slidesPerView: 1,
   centeredSlides: true,

   breakpoints: {
      
   },
   scrollbar: {
      el: '.swiper-scrollbar-best',
      draggable: true,
      enabled: true
   },

   navigation: {
      nextEl: '.swiper-button-next-best',
      prevEl: '.swiper-button-prev-best',
   },
});

const serachVars = document.querySelectorAll('.right-top__var')
const serachFilterVars = document.querySelectorAll('.right-top__right-var')

serachVars.forEach((el) => {
   el.onclick = () => {
      for (let i = 0; i < serachVars.length; i++) {
         serachVars[i].classList.remove('right-top__var--active')
      }
      el.classList.add('right-top__var--active')
   }
})
serachFilterVars.forEach((el) => {
   el.onclick = () => {
      for (let i = 0; i < serachFilterVars.length; i++) {
         serachFilterVars[i].classList.remove('right-top__right-var--active')
      }
      el.classList.add('right-top__right-var--active')
      if(el == serachFilterVars[1]) {
         document.querySelector('.right-main__grid').classList.add('right-main__grid--lines')
      } else document.querySelector('.right-main__grid').classList.remove('right-main__grid--lines')
   }
})