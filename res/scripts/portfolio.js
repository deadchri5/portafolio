//import works from "../myWorks.json";

const works = 
[
    {
        "image": "",
        "name": "Website for pet adoptions",
        "desc": "I build this project with AngularJS, Node JS and Mongo DB.",
        "link": "https://github.com/deadchri5"
    },
    {
        "image": "./res/images/Projects/projMinisuper-min.jpg",
        "name": "E-commerse for a grocery store",
        "desc": "This project is a marketplace for a local store called 'Abarrotes Topcacio', i build it with Angular, Laravel, and MySQL.",
        "link": "https://github.com/deadchri5/minisuper"
    },
    {
        "image": "",
        "name": "Tool for adminstration in a restaurant",
        "desc": "I was part of this project, that was developed in Java. Is a graphic interface who helps with the administration in local restaurants.",
        "link": "https://github.com/deadchri5"
    },
    {
        "image": "./res/images/Projects/projCham-min.jpg",
        "name": "Personal website",
        "desc": "This is a website to get in touch with my software team. It was made with ReactJS.",
        "link": "https://champrogrammers.github.io/web/"
    },
    {
        "image": "./res/images/Projects/citasVet-min.jpg",
        "name": "Appointments for a veterinaty",
        "desc": "This is a school project for agent appointments in a ficticial veterinary. It was maded with C# and WPF.",
        "link": "https://github.com/deadchri5/VeterinariaCS"
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
        '<a href="'+work.link+'" target="_blank" class="card__body__btn">View work</a>'+
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