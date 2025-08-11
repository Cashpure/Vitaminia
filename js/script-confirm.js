const rightChooseItem = document.querySelectorAll('.right-choose__item')

rightChooseItem.forEach((el) => {
   el.onclick = () => {
      rightChooseItem.forEach((item) => {
         item.classList.remove('right-choose__item--active')
      })
      el.classList.add('right-choose__item--active')
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

let itemAmount = Array.from(document.querySelectorAll('.left-item__amount-number'))
let itemPlus = Array.from(document.querySelectorAll('.left-item__amount-plus'))
let itemMinus = Array.from(document.querySelectorAll('.left-item__amount-minus'))
let itemPrice = Array.from(document.querySelectorAll('.price-current'))
let itemPriceTotal = Array.from(document.querySelectorAll('.price-total'))
let itemResultAmount = Array.from(document.querySelectorAll('.item-result-amount'))
let itemResultPrice = Array.from(document.querySelectorAll('.result-price-current'))
let itemResultPriceTotal = Array.from(document.querySelectorAll('.result-price-total'))
let finalPrice = document.querySelector('.final-price')
let finalPriceDelivery = document.querySelector('.final-price-delivery')
let finalPriceTotal = document.querySelector('.final-price-total')
let deliveryItem = document.querySelectorAll('.right-org__item-delivery')
let finalPriceTotalAdapt = document.querySelector('.price-total-adapt')
let itemWeight = document.querySelectorAll('.item-weight')
let totalWeight = document.querySelector('.total-weight')
let totalWeightNumber = 0

for (let i = 0; i < itemWeight.length; i++) {
   totalWeightNumber += Number(itemWeight[i].innerHTML)
}

totalWeightNumber /= 1000
totalWeight.innerHTML = '(' + totalWeightNumber + ' кг' + ')'

itemPlus.forEach((el) => {
   el.onclick = () => {
      let indexPlus = itemPlus.indexOf(el)
      if (Number(itemAmount[indexPlus].innerHTML <= 999)) {
         itemAmount[indexPlus].innerHTML = Number(itemAmount[indexPlus].innerHTML) + 1
         itemPriceTotal[indexPlus].innerHTML = Number(itemPriceTotal[indexPlus].innerHTML) + Number(itemPrice[indexPlus].innerHTML)
         itemResultPriceTotal[indexPlus].innerHTML = itemPriceTotal[indexPlus].innerHTML
         itemResultAmount[indexPlus].innerHTML = itemAmount[indexPlus].innerHTML
         let sum = 0
         for (let i = 0; i < itemAmount.length; i++) {
            sum += Number(itemPriceTotal[i].innerHTML)
         }
         finalPrice.innerHTML = sum
         if (isNaN(finalPriceDelivery.innerHTML)) {
            finalPriceTotal.innerHTML = finalPrice.innerHTML
         } else finalPriceTotal.innerHTML = Number(finalPrice.innerHTML) + Number(finalPriceDelivery.innerHTML)
         finalPriceTotalAdapt.innerHTML = finalPriceTotal.innerHTML
         totalWeightNumber += (Number(itemWeight[indexPlus].innerHTML) / 1000)
         totalWeight.innerHTML = '(' + parseFloat(totalWeightNumber.toFixed(1)) + ' кг' + ')'
      }
   }
})

itemMinus.forEach((el) => {
   el.onclick = () => {
      let indexMinus = itemMinus.indexOf(el)
      console.log(indexMinus)
      if (Number(itemAmount[indexMinus].innerHTML > 1)) {
         itemAmount[indexMinus].innerHTML = Number(itemAmount[indexMinus].innerHTML) - 1
         itemPriceTotal[indexMinus].innerHTML = Number(itemPriceTotal[indexMinus].innerHTML) - Number(itemPrice[indexMinus].innerHTML)
         itemResultPriceTotal[indexMinus].innerHTML = itemPriceTotal[indexMinus].innerHTML
         itemResultAmount[indexMinus].innerHTML = itemAmount[indexMinus].innerHTML
         let sum = 0
         for (let i = 0; i < itemAmount.length; i++) {
            sum += Number(itemPriceTotal[i].innerHTML)
         }
         finalPrice.innerHTML = sum
         finalPriceTotalAdapt.innerHTML = finalPriceTotal.innerHTML
         totalWeightNumber -= (Number(itemWeight[indexMinus].innerHTML) / 1000)
         totalWeight.innerHTML = '(' + parseFloat(totalWeightNumber.toFixed(1)) + ' кг' + ')'
      }
   }
})

deliveryItem.forEach((el) => {
   el.onclick = () => {
      let price = el.querySelector('.delivery-price').innerHTML
      console.log(price)
      finalPriceDelivery.innerHTML = price
      if (!isNaN(Number(finalPriceDelivery.innerHTML))) {
         finalPriceTotal.innerHTML = Number(finalPrice.innerHTML) + Number(finalPriceDelivery.innerHTML)
      } else finalPriceTotal.innerHTML = Number(finalPrice.innerHTML)
      finalPriceTotalAdapt.innerHTML = finalPriceTotal.innerHTML

      deliveryItem.forEach((item) => {
         item.classList.remove('right-org__item--active')
      })
      el.classList.add('right-org__item--active')
   }
})
