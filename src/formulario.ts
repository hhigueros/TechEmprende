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


        if (nombre.trim().length < 3) {
            return {
                ok: false,
                datos: "El nombre debe tener al menos 3 caracteres"
            };
        }


        if (!correo.includes("@")) {
            return {
                ok: false,
                datos: "Correo inválido"
            };
        }


        const nuevoLead = new Lead(
            this.#siguienteId++,
            nombre,
            correo,
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