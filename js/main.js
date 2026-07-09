// Menú de navegación en dispositivos móviles

const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.querySelector(".nav__links");

menuBtn.addEventListener("click", () => {

    menuLinks.classList.toggle("active");

});