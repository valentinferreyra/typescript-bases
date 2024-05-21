// Objetos

type Automovil = {
    carroceria : string,
    modelo : string,
    antibalas : boolean,
    pasajeros : number,
    disparar? : () => void
}

const batimovil : Automovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
}

const bumblebee : Automovil = {
    carroceria: "Amarillo",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar(){
        console.log("Disparando..");
    }
};

// Villanos debe de ser un arreglo de objetos que comparten un tipo
type Villano = {
    nombre: string; edad: number; esMutante: boolean
}

const villanos : Villano[] = [
    {nombre: "Lex Luthor", edad: 54, esMutante: false},
    {nombre: "Erik Magnus Lehnsherr", edad: 49, esMutante: true},
    {nombre: "James Logan", edad: undefined, esMutante: true}
]

// Multiples tipos permitidos
type Charles = {
    poder: string,
    estatura: number
}

type Apocalipsis = {
    esLider: boolean,
    miembros: string[]
}

const lider : Charles = {
    poder: "psiquico",
    estatura: 1.78
}

const magneto : Apocalipsis = {
    esLider: true,
    miembros: ["Siclope", "Jean", "Tormenta"]
}

// Mystique, debe poder ser cualquiera de esos dos personajes (charles o apocalipsis)
let mystique: Charles | Apocalipsis;

mystique = lider;
mystique = magneto;