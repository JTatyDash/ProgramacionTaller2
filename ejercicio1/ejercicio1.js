//Generar un código que determine si un numero es par o impar.
const dataFromConsole = process.argv;

const number = +dataFromConsole[2];

if (number %2 == 0){
    console.log("El numero es par ", number);
}
else{
    console.log("El numero es impar", number);
}