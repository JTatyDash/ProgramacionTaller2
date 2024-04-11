/*Este programa te ayuda a viajar. El programa pide al usuario si va a viajar con coche, tren,
bicicleta o autobús. Si va en tren o autobús le recordará que lleve dinero para el billete.*/

const dataFromConsole = process.argv;

const opcion1 = dataFromConsole[2];

if(opcion1 == 'tren'){
    console.log("Lleve dinero para el ticket");
}else if(opcion1 == 'coche'){
    console.log("Vas en coche");
}else if(opcion1 == 'bicicleta'){
    console.log("Vas en bicicleta");
}else if (opcion1 == 'autobus'){
    console.log("Lleve dinero para el ticket")
}else{
    console.log("Ingrese una de las opciones validas")
}