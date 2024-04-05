//Generar un código determine la diferencia (resta) entre dos
//números de tal manera que la resta siempre se haga del numero mayor hacia el numero menor

const dataFromConsole = process.argv;

const number1 = +dataFromConsole[2];
const number2 = +dataFromConsole[3];

if (number1 >= number2){
    resta = number1 - number2;
    console.log("El resultado de la resta es: ", resta);
} else {
    console.log("No es posible realizar la resta");
}