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