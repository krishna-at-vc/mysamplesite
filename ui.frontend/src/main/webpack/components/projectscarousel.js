// Projects Carousel JS

document.addEventListener('DOMContentLoaded', function () {
  const viewport = document.querySelector('.projects-carousel__viewport');
  const carousel = document.querySelector('.projects-carousel__list');
  const cards = document.querySelectorAll('.projects-carousel__card');
  const leftArrow = document.querySelector('.projects-carousel__nav-arrow--left');
  const rightArrow = document.querySelector('.projects-carousel__nav-arrow--right');
  if (!viewport || !carousel || !cards.length || !leftArrow || !rightArrow) return;

  let slidesToShow = getSlidesToShow();
  const slidesToScroll = 1;
  const totalCards = cards.length;
  let currentIndex = 0;

  function getSlidesToShow() {
    const width = window.innerWidth;
    if (width < 600) return 1;
    if (width < 900) return 2;
    return 4;
  }

  function getCardWidth() {
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
    const viewportWidth = viewport.offsetWidth;
    return (viewportWidth - gap * (slidesToShow - 1)) / slidesToShow;
  }

  function updateCardWidths() {
    const cardWidth = getCardWidth();
    cards.forEach(card => {
      card.style.width = cardWidth + 'px';
    });
    carousel.style.width = (cardWidth * totalCards + (totalCards - 1) * (parseFloat(getComputedStyle(carousel).gap) || 0)) + 'px';
  }

  function updateCarousel() {
    const cardWidth = getCardWidth();
    const gap = parseFloat(getComputedStyle(carousel).gap) || 0;
    const offset = currentIndex * (cardWidth + gap);
    carousel.style.transform = `translateX(-${offset}px)`;
    updateArrows();
  }

  function updateArrows() {
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex >= totalCards - slidesToShow;
  }

  leftArrow.addEventListener('click', function () {
    if (currentIndex > 0) {
      currentIndex -= slidesToScroll;
      if (currentIndex < 0) currentIndex = 0;
      updateCarousel();
    }
  });

  rightArrow.addEventListener('click', function () {
    if (currentIndex < totalCards - slidesToShow) {
      currentIndex += slidesToScroll;
      if (currentIndex > totalCards - slidesToShow) currentIndex = totalCards - slidesToShow;
      updateCarousel();
    }
  });

  // Responsive: recalculate on resize
  window.addEventListener('resize', () => {
    slidesToShow = getSlidesToShow();
    updateCardWidths();
    updateCarousel();
  });

  // Initial state
  updateCardWidths();
  updateCarousel();
}); 