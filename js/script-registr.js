const reg = document.querySelector('.registr-top__reg')
const aut = document.querySelector('.registr-top__aut')
const regTop = document.querySelector('.registr-top')
const regBtn = document.querySelector('.main-quest-request__left-button')

reg.onclick = () => {
   reg.classList.add('registr-button--active')
   aut.classList.remove('registr-button--active')
   document.querySelector('.registr-form__reg').style.display = 'block'
   document.querySelector('.registr-form__aut').style.display = 'none'
}
aut.onclick = () => {
   aut.classList.add('registr-button--active')
   reg.classList.remove('registr-button--active')
   document.querySelector('.registr-form__reg').style.display = 'none'
   document.querySelector('.registr-form__aut').style.display = 'block'
}

regBtn.onclick = () => {
   document.querySelector('.congrats').style.display = 'block'
   document.querySelector('.registr-form__aut').style.display = 'none'
   document.querySelector('.registr-form__reg').style.display = 'none'
   regTop.style.display = 'none'
}