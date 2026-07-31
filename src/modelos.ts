import { TipoPlan } from "./tipos.js";

// Clase base abstracta
export abstract class Persona {

    constructor(
        public readonly id: number,
        public nombre: string,
        protected correo: string
    ) {}

    abstract presentar(): string;
}


// HERENCIA: Lead hereda de Persona
export class Lead extends Persona {

    #plan: TipoPlan;

    constructor(
        id: number,
        nombre: string,
        correo: string,
        plan: TipoPlan
    ) {
        super(id, nombre, correo);
        this.#plan = plan;
    }


    // Encapsulamiento con getter
    get plan(): TipoPlan {
        return this.#plan;
    }


    // Encapsulamiento con setter
    set plan(nuevoPlan: TipoPlan) {
        this.#plan = nuevoPlan;
    }


    // Polimorfismo: implementación propia
    presentar(): string {
        return `${this.nombre} está interesado en el plan ${this.#plan}`;
    }
}


// Segunda clase hija
export class Suscriptor extends Persona {

    #fechaAlta: string;


    constructor(
        id: number,
        nombre: string,
        correo: string
    ) {
        super(id, nombre, correo);
        this.#fechaAlta = new Date().toLocaleDateString();
    }


    // Polimorfismo: mismo método, diferente comportamiento
    presentar(): string {
        return `${this.nombre} se suscribió el ${this.#fechaAlta}`;
    }
}