//efects of social elements
let gitHover = document.querySelector(".show-effect-gh");
document.querySelector(".show-effect-gh").addEventListener("mouseover", () => {
    gitHover.id = "showDetailGitHub";
});
document.querySelector(".show-effect-gh").addEventListener("mouseleave", () => {
    gitHover.removeAttribute("id");
});

let linkHover = document.querySelector(".show-effect-link");
document.querySelector(".show-effect-link").addEventListener("mouseover", () => {
    linkHover.id = "showDetailLinkedin";
});
document.querySelector(".show-effect-link").addEventListener("mouseleave", () => {
    linkHover.removeAttribute("id");
});

let discordHover = document.querySelector(".show-effect-discord");
document.querySelector(".show-effect-discord").addEventListener("mouseover", () => {
    discordHover.id = "showDetailDiscord";
});
document.querySelector(".show-effect-discord").addEventListener("mouseleave", () => {
    discordHover.removeAttribute("id");
});

let gmailHover = document.querySelector(".show-effect-gmail");
document.querySelector(".show-effect-gmail").addEventListener("mouseover", () => {
    gmailHover.id = "showDetailGmail";
});
document.querySelector(".show-effect-gmail").addEventListener("mouseleave", () => {
    gmailHover.removeAttribute("id");
});

let slackHover = document.querySelector(".show-effect-slack");
document.querySelector(".show-effect-slack").addEventListener("mouseover", () => {
    slackHover.id = "showDetailSlack";
});
document.querySelector(".show-effect-slack").addEventListener("mouseleave", () => {
    slackHover.removeAttribute("id");
});