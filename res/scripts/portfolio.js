//import works from "../myWorks.json";

const works = [
  {
    image: "",
    name: "Página web de adopciones",
    desc:
      "Es una página web que tiene como finalidad ayudar a animales domésticos en " +
      "situación de calle a encontrar un hogar. Tecnologías usadas: (Angular, Node JS, MongoDB).",
    repolink: "https://github.com/deadchri5/adoptaMe/tree/frontend",
    medialink: "www.google.com",
    isDeployed: false,
  },
  {
    image: "./res/images/Projects/projMinisuper-min.jpg",
    name: "E-commerce para tienda de abarrotes",
    desc: "Sistema de e-commerce desarrollado para una tienda local. Tecnologías (Angular, Laravel, y MySQL).",
    repolink: "https://github.com/deadchri5/minisuper",
    medialink: "https://www.google.com",
    isDeployed: false,
  },
  {
    image: "./res/images/Projects/java_interface2-min.png",
    name: "Herramienta de administración",
    desc: "Fui parte de este proyecto, es un software de escritorio el cual tiene la finalidad de ayudar a las cuentas en un restaurante, fue desarrollado con Java y FXML.",
    repolink: "https://github.com/deadchri5",
    medialink: "https://www.google.com",
    isDeployed: false,
  },
  {
    image: "./res/images/Projects/projCham-min.jpg",
    name: "Sitio web para establecer contacto",
    desc: "Sitio web para ponerse en contacto con un equipo de desarrollo de software. Este sitio fue creado con ReactJS como tecnología de frontend.",
    repolink: "https://github.com/champrogrammers/web",
    medialink: "https://champrogrammers.github.io/web/",
    isDeployed: true,
  },
  {
    image: "./res/images/Projects/citasVet-min.jpg",
    name: "Sistema de citas",
    desc: "Es un proyecto escolar para gestionar y agendar citas en una veterinaria. Escrito en C# y WPF.",
    repolink: "https://github.com/deadchri5/VeterinariaCS",
    medialink: "https://www.google.com",
    isDeployed: false,
  },
  {
    image: "",
    name: "Código de portafolio",
    desc: "Código de mi portafolio personal, si usted lo desea observar pulse en el botón de la tarjeta para ver el repositorio.",
    repolink: "https://github.com/deadchri5/portafolio/tree/master",
    medialink: "https://trusting-mirzakhani-aef1aa.netlify.app/",
    isDeployed: true,
  },
];

const setWorkinCards = () => {
  const cardContainer = document.getElementById("card-container");
  let i = 0;
  works.forEach((work) => {
    let cardEffect;
    let mediaButtonText;
    if (i % 2 == 0)
      cardEffect =
        'data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000"';
    else
      cardEffect =
        'data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000"';
    if (work.image == "") work.image = "./res/images/Projects/picture-min.jpg";
    if (work.isDeployed) mediaButtonText = "Ver trabajo";
    else mediaButtonText = "Ver imágenes";
    cardContainer.innerHTML +=
      '<div class="card"' +
      cardEffect +
      ">" +
      '<img src="' +
      work.image +
      '" alt="' +
      work.name +
      '" class="card__img"></img>' +
      '<div class="card__body">' +
      '<h5 class="card__body__title">' +
      work.name +
      "</h5>" +
      '<p class="card__body__p">' +
      work.desc +
      "</p>" +
      '<a href="' +
      work.medialink +
      '" target="_blank" class="card__body__btn card__body__btn__media">' +
      mediaButtonText +
      "</a>" +
      '<a href="' +
      work.repolink +
      '" target="_blank" class="card__body__btn">Ver repositorio</a>' +
      "</div>" +
      "</div>";
    i++;
  });
  console.log(cardContainer);
};

/*
<div class="card">
                <img src="./res/images/background.bmp" alt="" class="card__img">
                <div class="card__body">
                    <h5 class="card__body__title">Card title</h5>
                    <p class="card__body__p">
                        Here is some example text for the card component, because i don't have lorem ipsum
                        auto fill tool.
                    </p>
                    <a href="#" class="card__body__btn">View work</a>
                </div>
            </div>
*/

setWorkinCards();
