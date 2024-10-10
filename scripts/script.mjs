const carousel = document.querySelector('.carousel');
const arrowButtons = document.querySelectorAll('.project-page-wrapper svg');
const firstCardWidth = carousel.querySelector('.project').offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    carousel.scrollLeft +=
      button.id === 'left' ? -firstCardWidth : firstCardWidth;
  });
});

const startDragging = (e) => {
  isDragging = true;
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = e.pageX;
};

const stopDragging = () => {
  isDragging = false;
};

carousel.addEventListener('mousedown', startDragging);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', stopDragging);

// Hamburger menu
const hamburger = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.navbar-right');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', mobileMenu);