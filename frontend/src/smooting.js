const navigationLinks = document.querySelectorAll('nav a');

navigationLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

function scrollToSection(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');

    const isInternalLink = targetId.startsWith('#');

    if (isInternalLink) {
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    } else {
    
        window.location.href = targetId;
    }
}