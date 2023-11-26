// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.body.classList.add("loaded");

    const graySquare = document.querySelector(".gray-square");

    // Add the 'zoom-out' class to trigger the animation after a short delay
    setTimeout(() => {
        graySquare.classList.add("zoom-out");
    }, 1000);
});

function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}
