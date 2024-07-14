// scripts.js

// Example animation for the hero section content
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = 0;
    setTimeout(() => {
        heroContent.style.opacity = 1;
        heroContent.style.transition = 'opacity 2s ease-in';
    }, 500);
});
