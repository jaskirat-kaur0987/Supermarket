const images = [
    "CSS/AJ.jpg",
    "CSS/asian store.webp",
    "CSS/store.avif"
  ];
  
  let i = 0;
  const slider = document.querySelector('.slider');
  
  function changeBackground() {
    slider.style.backgroundImage = `url('${images[i]}')`;
    i = (i + 1) % images.length;
  }
  
  setInterval(changeBackground, 4000);
  changeBackground();
  