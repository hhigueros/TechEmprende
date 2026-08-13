import { Lead } from "./modelos.js";
import { TipoPlan, Resultado } from "./tipos.js";


export class GestorContactos {

    #leads: Lead[] = [];
    #siguienteId: number = 1;


    agregarContacto(
        nombre: string,
        correo: string,
        plan: TipoPlan
    ): Resultado<string> {

        const nombreLimpio = nombre.trim();
        const correoLimpio = correo.trim();


        if (nombreLimpio.length < 3) {
            return {
                ok: false,
                datos: "El nombre debe tener al menos 3 caracteres"
            };
        }


        const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correoLimpio)) {
            return {
                ok: false,
                datos: "Correo inválido"
            };
        }


        const planesValidos: TipoPlan[] = [
            "gratis",
            "emprendedor",
            "empresa"
        ];


        if (!planesValidos.includes(plan)) {
            return {
                ok: false,
                datos: "El plan seleccionado no es válido"
            };
        }


        const nuevoLead = new Lead(
            this.#siguienteId++,
            nombreLimpio,
            correoLimpio,
            plan
        );


        this.#leads.push(nuevoLead);


        return {
            ok: true,
            datos: nuevoLead.presentar()
        };
    }


    obtenerContactos(): Lead[] {
        return this.#leads;
    }


    guardarJSON(): void {

        const json = JSON.stringify(
            this.#leads,
            null,
            2
        );


        const blob = new Blob(
            [json],
            {
                type: "application/json"
            }
        );


        const url = URL.createObjectURL(blob);


        const enlace = document.createElement("a");

        enlace.href = url;
        enlace.download = "contactos.json";

        enlace.click();


        URL.revokeObjectURL(url);
    }

}