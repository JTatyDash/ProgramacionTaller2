//En un tramo de un rally los conductores no deben ir ni demasiado rápido ni demasiado lentos. Este
//ejercicio debe tomar la longitud del tramo en kilómetros y el tiempo empleado, si la velocidad está entre
//40 y 60 km/h el conductor pasa la prueba en caso contrario es descalificado.

//Ejemplo. si recorre 100 km en 4 horas, ha ido a una velocidad de 100/4 que son 25km/h. Estaría descalificado.

const dataFromConsole = process.argv;

const meter = +dataFromConsole[2];
const centimeter = meter * 100;
const length = centimeter / 1000;
console.log("Kilometros: ", length);

const time = +dataFromConsole[3];
const speed = length / time;
console.log("Velocidad: ", speed, "Km/h");

if (speed >= 40){
    console.log("El conductor paso la prueba: ");
}else{
    console.log("No paso la prueba, DESCALIFICADO")
}