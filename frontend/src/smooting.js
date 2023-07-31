const navigationLinks = document.querySelectorAll('nav a');

// Add event listener to each navigation link
navigationLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
});

// Scroll to the corresponding section smoothly for internal links
function scrollToSection(event) {
    event.preventDefault();

    // Get the target section based on the link's href attribute
    const targetId = this.getAttribute('href');

    // Check if the target is an internal link (within the same page)
    const isInternalLink = targetId.startsWith('#');

    if (isInternalLink) {
        // For internal links, perform the smooth scrolling behavior
        const targetSection = document.querySelector(targetId);
        const targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    } else {
        // For external links (e.g., "Enquiry" button), navigate to the external URL
        window.location.href = targetId;
    }
}