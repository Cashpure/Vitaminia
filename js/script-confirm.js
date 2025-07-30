const rightChooseItem = document.querySelectorAll('.right-choose__item')

rightChooseItem.forEach((el) => {
   el.onclick = () => {
      rightChooseItem.forEach((item) => {
         item.classList.remove('right-choose__item--active')
      })
      el.classList.add('right-choose__item--active')
   }
})

const chooseDelivery = document.querySelectorAll('.right-org__item-delivery')

chooseDelivery.forEach((el) => {
   el.onclick = () => {
      chooseDelivery.forEach((item) => {
         item.classList.remove('right-org__item--active')
      })
      el.classList.add('right-org__item--active')
   }
})

const choosePayment = document.querySelectorAll('.right-org__item-pay')

choosePayment.forEach((el) => {
   el.onclick = () => {
      choosePayment.forEach((item) => {
         item.classList.remove('right-org__item--active')
      })
      el.classList.add('right-org__item--active')
   }
})

const itemTop = document.querySelectorAll('.main-comment-item__top')
const leftItemTop = document.querySelectorAll('.left-item__top')

function resize() {
   let imgWidth = window.getComputedStyle(document.querySelector('.main-comment-item__img')).width
   let nameWidth = window.getComputedStyle(document.querySelector('.main-comment-item__name')).width
   let priceWidth = window.getComputedStyle(document.querySelector('.main-comment-item__price-current')).width
   let amountWidth = window.getComputedStyle(document.querySelector('.main-comment-item__amount')).width

   let nameTopWidth = window.getComputedStyle(document.querySelector('.left-item__name')).width
   let priceTopWidth = window.getComputedStyle(document.querySelector('.left-item__price-current')).width
   let amountTopWidth = window.getComputedStyle(document.querySelector('.left-item__amount')).width

   itemTop[0].style.width = imgWidth
   itemTop[1].style.width = nameWidth
   itemTop[2].style.width = priceWidth
   itemTop[3].style.width = amountWidth
   itemTop[4].style.width = priceWidth

   leftItemTop[0].style.width = imgWidth
   leftItemTop[1].style.width = nameTopWidth
   leftItemTop[2].style.width = priceTopWidth
   leftItemTop[3].style.width = amountTopWidth
   leftItemTop[4].style.width = priceTopWidth
}

resize()

window.addEventListener('resize', resize)