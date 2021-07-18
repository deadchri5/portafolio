//Global
const aboutmeSection = document.getElementById('about-me');
const contactSection = document.getElementById('particles-js');
const portfolioSection = document.getElementById('portfolio');

function gotoAboutSection(event){
    event.preventDefault();
    document.scrollTop = aboutmeSection.offsetTop - 80;
    document.documentElement.scrollTop = aboutmeSection.offsetTop - 80;
}

function gotoContactSection(event){
    event.preventDefault();
    document.scrollTop = contactSection.offsetTop;
    document.documentElement.scrollTop = contactSection.offsetTop;
}

function gotoPortfolioSection(event){
    event.preventDefault();
    document.scrollTop = portfolioSection.offsetTop;
    document.documentElement.scrollTop = portfolioSection.offsetTop;
}