const mobileNav = document.getElementById('nav-mobile');
const hamburguer = document.querySelector('.hamburguer');
const mobileMenu = document.querySelector('.mobile-menu');

hamburguer.addEventListener('click', () => {
    mobileMenu.classList.toggle('open-anim');
    mobileNav.classList.toggle('remove-opacity');
    hamburguer.classList.toggle('close');
})