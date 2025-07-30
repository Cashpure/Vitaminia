let link = document.querySelectorAll('.me-link')
let mobileLink = document.querySelectorAll('.me-link__child')
const mainRightData = document.querySelector('.main-block-1__right-personal')
const mainRightWrapper = document.querySelector('.main-block-1__right')
const mainLeftWrapper = document.querySelector('.main-block-1__left')
const mainMobile = document.querySelector('.main-block-1__mobile')
const locDecor = document.querySelector('.location-slesh-2')
const currentLoc = document.querySelector('.location-current-2')


link.forEach((el) => {
   el.onclick = () => {
      link.forEach((item) => item.classList.remove('main-block-1__left-item--active'));

      el.classList.add('main-block-1__left-item--active');

      if (el.querySelector('.main-block-1__item-link-1')) {
         mainRightData.classList.add('main-block-1__right-personal--active');
      } else mainRightData.classList.remove('main-block-1__right-personal--active');

      locDecor.classList.remove('location-slesh--disabled')
      currentLoc.classList.remove('location-current--disabled')
      let linkChild = el.querySelector('.me-link__child')
      currentLoc.innerHTML = linkChild.innerHTML
   }
});

mobileLink.forEach((el) => {
   el.onclick = () => {
      mainRightWrapper.style.display = 'block'
      mainMobile.style.display = 'none'
   }
})

const linkData = document.querySelector('.main-block-1__item-link-data')
const linkDelivery = document.querySelector('.main-block-1__item-link-delivery')
const linkAddresses = document.querySelector('.main-block-1__item-link-addresses')
const linkFeedback = document.querySelector('.main-block-1__item-link-feedback')

const mobileLinkData = document.querySelector('.me-link__child-data')
const mobileLinkDelivery = document.querySelector('.me-link__child-delivery')
const mobileLinkAddresses = document.querySelector('.me-link__child-addresses')
const mobileLinkFeedback = document.querySelector('.me-link__child-feedback')

mobileLinkData.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   mainRightWrapper.style.display = 'block'
   mainLeftWrapper.style.display = 'none'
   mainMobile.style.display = 'none'
   mainRightData.style.display = 'block'
}
mobileLinkAddresses.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   mainRightWrapper.style.display = 'block'
   mainLeftWrapper.style.display = 'none'
   mainMobile.style.display = 'none'
   document.querySelector('.me-addresses').style.display = 'block'
}
mobileLinkDelivery.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   mainRightWrapper.style.display = 'block'
   mainLeftWrapper.style.display = 'none'
   mainMobile.style.display = 'none'
   document.querySelector('.me-delivery').style.display = 'block'
}
mobileLinkFeedback.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   mainRightWrapper.style.display = 'block'
   mainLeftWrapper.style.display = 'none'
   mainMobile.style.display = 'none'
   document.querySelector('.me-feedback').style.display = 'block'
}

linkData.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   mainRightData.style.display = 'block'
}
linkDelivery.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   document.querySelector('.me-delivery').style.display = 'block'
}
linkAddresses.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   document.querySelector('.me-addresses').style.display = 'block'
}
linkFeedback.onclick = () => {
   let meBlock = document.querySelectorAll('.me-block')
   meBlock.forEach((el) => {
      el.style.display = 'none'
   })
   document.querySelector('.me-feedback').style.display = 'block'
}

const chooseItems = document.querySelectorAll('.choose-item')
chooseItems.forEach((el) => {
   el.onclick = () => {
      for (let i = 0; i < chooseItems.length; i++) {
         chooseItems[i].classList.remove('choose-item--active')
      }
      el.classList.add('choose-item--active')
   }
})

window.addEventListener('load', () => {
   const itemStatuses = document.querySelectorAll('.item-left__top-status');

   itemStatuses.forEach((el) => {
      if (el.classList.contains('item-left__top-status--active')) {
         el.textContent = 'Получен';
      } else {
         el.textContent = 'Отменен';
      }
   });
});