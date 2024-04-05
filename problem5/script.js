const box = document.getElementById('box');
const animateBtn = document.getElementById('animate-btn');
let isAnimating = false;

animateBtn.addEventListener('click', () => {
  if (isAnimating) return;
  isAnimating = true;
  
  box.style.transform = 'translate(-50%, -50%) translateX(200px)';
  
  setTimeout(() => {
    box.style.transform = 'translate(-50%, -50%)';
    isAnimating = false;
  }, 500);
});
