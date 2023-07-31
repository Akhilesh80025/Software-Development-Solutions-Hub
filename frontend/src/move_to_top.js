// Select the "move to top" button
const moveToTopBtn = document.getElementById('moveToTopBtn');

// Add a scroll event listener to show/hide the button
window.addEventListener('scroll', handleScroll);

function handleScroll() {
  // Show the button when the user scrolls down 20% of the viewport height
  if (window.scrollY > window.innerHeight * 0.2) {
    moveToTopBtn.style.display = 'block';
  } else {
    moveToTopBtn.style.display = 'none';
  }
}

// Add a click event listener to scroll to the top when the button is clicked
moveToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  // Scroll to the top of the page smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


