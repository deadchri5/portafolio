//efects of social elements
let gitHover = document.querySelector(".show-effect-gh");
document.querySelector(".show-effect-gh").addEventListener("mouseover", () => {
  gitHover.id = "showDetailGitHub";
});
document.querySelector(".show-effect-gh").addEventListener("mouseleave", () => {
  gitHover.removeAttribute("id");
});

let linkHover = document.querySelector(".show-effect-link");
document
  .querySelector(".show-effect-link")
  .addEventListener("mouseover", () => {
    linkHover.id = "showDetailLinkedin";
  });
document
  .querySelector(".show-effect-link")
  .addEventListener("mouseleave", () => {
    linkHover.removeAttribute("id");
  });

let gmailHover = document.querySelector(".show-effect-gmail");
document
  .querySelector(".show-effect-gmail")
  .addEventListener("mouseover", () => {
    gmailHover.id = "showDetailGmail";
  });
document
  .querySelector(".show-effect-gmail")
  .addEventListener("mouseleave", () => {
    gmailHover.removeAttribute("id");
  });
