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

//Modal buttons

function btnCLoseModal() {
  document.getElementById("modal").remove();
};

const modalContainer = document.getElementById("modal-container");

function modalShow(object) {
  modalContainer.innerHTML +=
    '<div id="modal" class="modal">' +
    '<div class="modal__content">' +
    '<button class="modal__content__button" onclick="btnCLoseModal()">Cerrar</button>' +
    '<p class="modal__content__title">Titulo de mi modal</p>' +
    '<p class="modal__content__desc">' +
    "some desc" +
    "</p>" +
    "<iframe " +
    'src="https://www.youtube.com/embed/gctc2Un5iRY" ' +
    'frameborder="0" ' +
    'class="modal__content__video"></iframe>' +
    "</div>" +
    "</div>";
}
