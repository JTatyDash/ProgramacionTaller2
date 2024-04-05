//Generar un código que determine si un numero es negativo, positivo o cero
const dataFromConsole = process.argv;

const number1 = +dataFromConsole[2];


if (number1 > 0) {
  console.log("El nnumero es positivo:", number1);
} else if (number1 == 0) {
  console.log("El numero es 0");
} else if (number1 < 0) {
  console.log("El numero es negativo");
}
