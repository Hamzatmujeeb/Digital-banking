// Select the hamburger and nav elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the 'active' class when hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
