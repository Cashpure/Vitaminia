let phoneIcon = document.querySelector('.header-top__phone-inner')
const phoneIconMain = document.querySelector('.header-main__phone-icon')
const phoneText = document.querySelector('.header-top__phone-text')
const overlay = document.querySelector('.overlay')
const callCross = document.querySelector('.call-request__cross')
const callRequest = document.querySelector('.call-request')
const cartNumber = document.querySelector('.cart-number')
let cartNumberDefault = "8"
const cart = document.querySelector('.header-main__link-cart')
const headerLinkCatalog = document.querySelector('.header-bot__link-catalog')
const headerLinkCatalogArrow = document.querySelector('.catalog-arrow')
const cartBtnText = document.querySelectorAll('.cart-button__text')

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

headerLinkCatalog.onclick = () => {
   headerLinkCatalogArrow.classList.toggle('catalog-arrow--active')
}

const up = document.querySelector('.up')
up.onclick = () => {
   window.scrollTo({
      top:0,
      behavior: 'smooth'
   })
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