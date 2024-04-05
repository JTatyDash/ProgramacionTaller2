//Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota
//promedio. El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7
//y Notable por encima de 7.

const dataFromConsole = process.argv;

const note1 = +dataFromConsole[2];
const note2 = +dataFromConsole[3];
const note3 = +dataFromConsole[4];

const notes = note1 + note2 + note3;
average = notes / 3;

if (average < 5){
    console.log("Suspenso")
}else if(average >= 5 && average <= 7){
    console.log("Aprobo")
}else if(average > 7){
    console.log("Notable")
}
