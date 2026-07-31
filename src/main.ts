const menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
const menuLinks = document.querySelector(".nav__links") as HTMLElement;

menuBtn.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
});

import { GestorContactos } from "./formulario.js";


const gestor = new GestorContactos();

const botonGuardar = document.getElementById("guardar") as HTMLButtonElement;


botonGuardar.addEventListener("click", () => {

    gestor.guardarJSON();

});

const formulario = document.getElementById("formulario") as HTMLFormElement;
const resultado = document.getElementById("resultado") as HTMLElement;


formulario.addEventListener("submit", (evento: Event) => {

    evento.preventDefault();

    const datos = new FormData(formulario);

    const nombre = String(datos.get("nombre"));
    const correo = String(datos.get("correo"));
    const plan = String(datos.get("plan")) as "gratis" | "emprendedor" | "empresa";


    const respuesta = gestor.agregarContacto(
        nombre,
        correo,
        plan
    );


    resultado.textContent = respuesta.datos;


    if (respuesta.ok) {
        formulario.reset();
    }

});