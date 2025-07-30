const track = document.getElementById('marquee-track');

const itemHTML = track.innerHTML;
for (let i = 0; i < 20; i++) {
   track.innerHTML += itemHTML;
}

let x = 0;
function animate() {
   x -= 1;
   track.style.transform = `translateX(${x}px)`;

   if (-x >= track.offsetWidth / 2) {
      x = 0;
   }

   requestAnimationFrame(animate);
}

window.onload = animate;