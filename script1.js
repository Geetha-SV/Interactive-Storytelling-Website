document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.slide-in, .fade-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`; // Adjust delay based on index
    });
});