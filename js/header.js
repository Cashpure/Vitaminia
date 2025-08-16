let phoneIcon = document.querySelector('.header-top__phone-inner')
const phoneIconMain = document.querySelector('.header-main__phone-icon')
const phoneText = document.querySelector('.header-top__phone-text')
const overlay = document.querySelector('.overlay')
const callCross = document.querySelector('.call-request__cross')
const callRequest = document.querySelector('.call-request')
const cartNumber = document.querySelector('.cart-number')
let cartNumberDefault = "8"
const cart = document.querySelector('.header-main__link-cart')
const headerLinkCatalog = document.querySelectorAll('.catalog-header')
const headerLinkCatalogArrow = document.querySelector('.catalog-arrow')
const footerLinkCatalog = document.querySelector('.footer-under__catalog')
const catalogMenu = document.querySelector('.catalog-menu')
const catalogMenuTitle = document.querySelectorAll('.catalog-menu__block-title')
const catalogMenuTitleLink = document.querySelectorAll('.catalog-menu__block-title-link')
const cartBtnText = document.querySelectorAll('.cart-button__text')
const container = document.querySelector('.container')

// if (window.innerWidth <= 1230) {
//    cartBtnText.innerHTML = 'в корзину'
//    cartBtnText.forEach((el) => {
//       el.innerHTML = 'в корзину'
//    })
// } else cartBtnText.forEach((el) => {
//    el.innerHTML = 'Добавить в корзину'
// })

// window.onresize = () => {
//    if (window.innerWidth <= 1230) {
//       cartBtnText.innerHTML = 'в корзину'
//       cartBtnText.forEach((el) => {
//          el.innerHTML = 'в корзину'
//       })
//    } else cartBtnText.forEach((el) => {
//       el.innerHTML = 'Добавить в корзину'
//    })
// }

phoneIcon.onmouseover = () => {
   phoneIcon = document.querySelector('.header-top__phone-inner')
   phoneIcon.classList.add('header-top__phone-inner--active')
   setTimeout(() => {
   }, 100);
   phoneText.style.display = 'block'
}
phoneIcon.onmouseout = () => {
   phoneIcon = document.querySelector('.header-top__phone-inner')
   phoneIcon.classList.remove('header-top__phone-inner--active')
   phoneText.style.display = 'none'
}
phoneIcon.onclick = () => {
   overlay.classList.toggle('overlay--active')
   callRequest.classList.add('call-request--active')
}
phoneIconMain.onclick = () => {
   overlay.classList.toggle('overlay--active')
   callRequest.classList.add('call-request--active')
}
overlay.onclick = () => {
   overlay.classList.remove('overlay--active')
   callRequest.classList.remove('call-request--active')
}
callCross.onclick = () => {
   overlay.classList.remove('overlay--active')
   callRequest.classList.remove('call-request--active')
}

cart.onmouseover = () => {
   cartNumber.innerHTML = cartNumber.innerHTML + " товаров на сумму 5678 руб."
}
cart.onmouseout = () => {
   cartNumber.innerHTML = cartNumberDefault
}

headerLinkCatalog.forEach((el) => {
   el.onclick = () => {
      catalogMenu.classList.toggle('catalog-menu--active')
      headerLinkCatalogArrow.classList.toggle('catalog-arrow--active')
      document.querySelector('.catalog-main').classList.toggle('catalog-main--active')

      if (window.innerWidth <= 1230) {
         document.querySelector('.header-main__inner').classList.toggle('header-main__inner--catalog')
      }
   }
})

footerLinkCatalog.onclick = () => {
   footerLinkCatalog.classList.toggle('footer-under__catalog--active')
   catalogMenu.classList.toggle('catalog-menu--active')
   headerLinkCatalogArrow.classList.toggle('catalog-arrow--active')
   document.querySelector('.catalog-main').classList.toggle('catalog-main--active')
   document.querySelectorAll('.footer-under__link').forEach((el) => {
      el.classList.toggle('footer-under__link--active')
   })
}

catalogMenuTitleLink.forEach((el) => {
   el.onmouseover = () => {
      el.classList.add('catalog-menu__block-title-link--active')
   }
})
catalogMenuTitleLink.forEach((el) => {
   el.onmouseout = () => {
      el.classList.remove('catalog-menu__block-title-link--active')
   }
})

const catalogMenuSize = () => {
   if (window.innerWidth >= 1230) {
      catalogMenu.style.width = getComputedStyle(container).getPropertyValue('width')
      document.querySelectorAll('.catalog-menu__block-list').forEach((el) => {
         el.style.display = 'block'
      })
   } else {
      catalogMenu.style.width = '100%'
      catalogMenu.classList.remove('catalog-menu--active')
      headerLinkCatalogArrow.classList.remove('catalog-arrow--active')
      document.querySelector('.catalog-main').classList.remove('catalog-main--active')
      document.querySelector('.header-main__inner').classList.remove('header-main__inner--catalog')
      document.querySelectorAll('.footer-under__link').forEach((el) => {
         el.classList.remove('footer-under__link--active')
      })
      footerLinkCatalog.classList.remove('footer-under__catalog--active')
      document.querySelectorAll('.catalog-menu__block-list').forEach((el) => {
         el.style.display = 'none'
      })
   }
}

window.onload = () => {
   catalogMenuSize()
}
window.onresize = () => {
   catalogMenuSize()
}

const up = document.querySelector('.up')
up.onclick = () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   })
}

window.onscroll = () => {
   if (window.scrollY >= 200) {
      up.style.opacity = '1'
   } else up.style.opacity = '0'
}

const phoneInput = document.querySelectorAll('.input-phone');
phoneInput.forEach((el) => {
   el.addEventListener('input', onPhoneInput);
   el.addEventListener('focus', onPhoneInput);
   el.addEventListener('blur', onPhoneBlur);
   el.addEventListener('keydown', onPhoneKeyDown);
})

function onPhoneInput(e) {
   let input = e.target,
      inputNumbersValue = input.value.replace(/\D/g, ''),
      formattedInputValue = '+7 (';

   if (!inputNumbersValue) return input.value = '';

   if (inputNumbersValue[0] === '8') {
      inputNumbersValue = inputNumbersValue.substring(1);
   } else if (inputNumbersValue.startsWith('7')) {
      inputNumbersValue = inputNumbersValue.substring(1);
   }

   if (inputNumbersValue[0] !== '9') {
      inputNumbersValue = '9' + inputNumbersValue;
   }

   if (inputNumbersValue.length > 0) {
      formattedInputValue += inputNumbersValue.substring(0, 3);
   }
   if (inputNumbersValue.length >= 4) {
      formattedInputValue += ') ' + inputNumbersValue.substring(3, 6);
   }
   if (inputNumbersValue.length >= 7) {
      formattedInputValue += '-' + inputNumbersValue.substring(6, 8);
   }
   if (inputNumbersValue.length >= 9) {
      formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
   }

   input.value = formattedInputValue;
}

function onPhoneBlur(e) {
   const input = e.target;
   if (input.value.replace(/\D/g, '').length < 11) {
      input.value = '';
   }
}

function onPhoneKeyDown(e) {
   const input = e.target;
   if (e.key === 'Backspace' && input.value.replace(/\D/g, '').length <= 1) {
      input.value = '';
   }
}

document.querySelectorAll('.catalog-title__acc').forEach(toggle => {
   toggle.addEventListener('click', () => {
      if (window.innerWidth <= 1230) {
         const content = toggle.nextElementSibling;
         content.style.display = content.style.display === 'block' ? 'none' : 'block';
         toggle.classList.toggle('catalog-title__acc--active')
      }
   });
});


document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".button-anim");

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
