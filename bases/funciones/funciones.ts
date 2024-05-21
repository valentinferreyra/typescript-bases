// Funciones basicas

const sumar = (a: number, b: number) : number => a + b;

const contar = (heroes: string[]) : number => heroes.length;

var superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
contar(superHeroes);

// Parametros por defecto
const llamarBatman = (llamar : boolean = true) : void => {
    if (llamar) {
        console.log("Llamar batman")
    }
}

llamarBatman();

// Rest
const unirHeroes = (...superHeroes : string[]) : string => {
    return superHeroes.join(', ');
}

// Tipo funcion
const noHaceNada = (numero : number, texto : string, booleano : boolean, arreglo : string[]) : void => {}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco: (n:number, s:string, b:boolean, a:string[]) => void;

noHaceNadaTampoco = noHaceNada;
