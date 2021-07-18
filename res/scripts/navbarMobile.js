const mobileNav = document.getElementById('nav-mobile');
const hamburguer = document.querySelector('.hamburguer');
const navList = document.querySelector('.navlinks');

hamburguer.addEventListener('click', () => {
    navList.classList.toggle('open-anim');
    mobileNav.classList.toggle('remove-opacity');
    hamburguer.classList.toggle('close');
})