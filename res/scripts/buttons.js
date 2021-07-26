//Global
const aboutmeSection = document.getElementById("about-me");
const contactSection = document.getElementById("particles-js");
const portfolioSection = document.getElementById("portfolio");

function gotoAboutSection(event) {
  event.preventDefault();
  document.scrollTop = aboutmeSection.offsetTop - 80;
  document.documentElement.scrollTop = aboutmeSection.offsetTop - 80;
  mobileMenu.classList.toggle("open-anim");
  mobileNav.classList.toggle("remove-opacity");
  hamburguer.classList.toggle("close");
}

function gotoContactSection(event) {
  event.preventDefault();
  document.scrollTop = contactSection.offsetTop;
  document.documentElement.scrollTop = contactSection.offsetTop;
  mobileMenu.classList.toggle("open-anim");
  mobileNav.classList.toggle("remove-opacity");
  hamburguer.classList.toggle("close");
}

function gotoPortfolioSection(event) {
  event.preventDefault();
  document.scrollTop = portfolioSection.offsetTop;
  document.documentElement.scrollTop = portfolioSection.offsetTop;
  mobileMenu.classList.toggle("open-anim");
  mobileNav.classList.toggle("remove-opacity");
  hamburguer.classList.toggle("close");
}


//Modal close button
let btnCLoseModal = document.querySelector(".modal__content__button");
btnCLoseModal.addEventListener('click', () => {
  document.getElementById("modal").remove();
})