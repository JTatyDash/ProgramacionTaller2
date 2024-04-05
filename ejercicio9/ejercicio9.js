//Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre.
//El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un
//nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario
//su nombre y sexo, y muestre por pantalla el grupo que le corresponde.

const dataFromConsole = process.argv;
const sexo = dataFromConsole[2].toUpperCase();
const nombre = dataFromConsole[3].toUpperCase();

const grupoA = (sexo === "M" && nombre < "M") || (sexo === "H" && nombre > "N");

if (grupoA) {
    console.log("Perteneces al grupo A");
} else {
    console.log("Perteneces al grupo B");
}