//import works from "../myWorks.json";

const works = 
[
    {
        "image": "",
        "name": "Página web de adopciones",
        "desc": "Es una página web que tiene como finalidad ayudar a animales domésticos en " +
                "situación de calle a encontrar un hogar. Tecnologías usadas: (Angular, Node JS, MongoDB).",
        "link": "https://github.com/deadchri5"
    },
    {
        "image": "./res/images/Projects/projMinisuper-min.jpg",
        "name": "E-commerce para tienda de abarrotes",
        "desc": "Sistema de e-commerce desarrollado para una tienda local. Tecnologías (Angular, Laravel, y MySQL).",
        "link": "https://github.com/deadchri5/minisuper"
    },
    {
        "image": "./res/images/Projects/java_interface2-min.png",
        "name": "Herramienta de administración",
        "desc": "Fui parte de este proyecto, es un software de escritorio el cual tiene la finalidad de ayudar a las cuentas en un restaurante, fue desarrollado con Java y FXML.",
        "link": "https://github.com/deadchri5"
    },
    {
        "image": "./res/images/Projects/projCham-min.jpg",
        "name": "Sitio web personal",
        "desc": "Sitio web para ponerse en contacto con un equipo de desarrollo de software. Fue hecho con ReactJS.",
        "link": "https://champrogrammers.github.io/web/"
    },
    {
        "image": "./res/images/Projects/citasVet-min.jpg",
        "name": "Sistema de citas",
        "desc": "Es un proyecto escolar para gestionar y agendar citas en una veterinaria. Escrito en C# y WPF.",
        "link": "https://github.com/deadchri5/VeterinariaCS"
    },
    {
        "image": "",
        "name": "Código de portafolio",
        "desc": "Pulsa en ver trabajo para ver el código de mi portafolio personal. (La página que usted ve en este momento)",
        "link": "https://github.com/deadchri5/portafolio/tree/master"
    }
]

const setWorkinCards = () =>{
    const cardContainer = document.getElementById('card-container')
    let i = 0
    works.forEach(work => {

        let cardEffect
        if (i % 2 == 0)
            cardEffect = 'data-aos="flip-left" data-aos-delay="50" data-aos-duration="1000"'
            else
            cardEffect = 'data-aos="flip-right" data-aos-delay="50" data-aos-duration="1000"'
            console.log(work.image)
        if (work.image == '')
            work.image = "./res/images/Projects/picture-min.jpg"
            
        cardContainer.innerHTML += '<div class="card"' +cardEffect+'>'+ 
        '<img src="'+work.image+'" alt="'+work.name+'" class="card__img"></img>' + 
        '<div class="card__body">'+
        '<h5 class="card__body__title">'+work.name+'</h5>'+
        '<p class="card__body__p">'+
            work.desc+
        '</p>'+
        '<a href="'+work.link+'" target="_blank" class="card__body__btn">Ver trabajo</a>'+
          '</div>'+
        '</div>'
        i++
    });
    console.log(cardContainer)
}

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

setWorkinCards()