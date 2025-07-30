const stars = document.querySelectorAll('.star')
const starsArr = Array.from(stars)
stars.forEach((el)=> {
   el.onclick = () => {
      const index = starsArr.indexOf(el)
      console.log(index)
      stars.forEach((item) => {
         item.classList.remove('star--active')
      })
      for (let i = 0; i <= index; i++) {
         stars[i].classList.add('star--active')
      }
   }
})