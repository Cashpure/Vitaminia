document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".button-anim");

   buttons.forEach(button => {
      const path = button.querySelector(".button-decor svg path");
      if (!path) return;

      const originalD = path.getAttribute("d");
      const squareD = "M0 0H40V40H0V0Z";

      let animationFrame;
      let currentProgress = 0;
      const duration = 200;

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

      button.addEventListener("mouseenter", () => {
         animate(originalD, squareD);
      });

      button.addEventListener("mouseleave", () => {
         animate(originalD, squareD, true);
      });
   });
});

let swiper;
function initSwiper() {
   const screenWidth = window.innerWidth;

   if (screenWidth < 500 && !swiper) {
      swiper = new Swiper('.swiper', {
         slidesPerView: 1,
         loop: false,
         spaceBetween: 10,
      });
   } else if (screenWidth >= 500 && swiper) {
      swiper.destroy(true, true);
      swiper = undefined;
   }
}

window.addEventListener('load', () => {
   initSwiper();
});
window.addEventListener('resize', () => {
   initSwiper();
});