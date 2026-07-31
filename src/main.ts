const menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
const menuLinks = document.querySelector(".nav__links") as HTMLElement;

menuBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
});