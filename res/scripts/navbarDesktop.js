const navbar = document.getElementById('navbar');

window.onscroll = () => {
    "use strict";
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50){
        navbar.classList.add("nav-before-scroll");
        navbar.classList.remove("nav-after-scroll");
    }
    else{
        navbar.classList.add("nav-after-scroll");
        navbar.classList.remove("nav-before-scroll");
    }
}