
const moveToTopBtn = document.getElementById('moveToTopBtn');


window.addEventListener('scroll', handleScroll);

function handleScroll() {

  if (window.scrollY > window.innerHeight * 0.2) {
    moveToTopBtn.style.display = 'block';
  } else {
    moveToTopBtn.style.display = 'none';
  }
}


moveToTopBtn.addEventListener('click', scrollToTop);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}


