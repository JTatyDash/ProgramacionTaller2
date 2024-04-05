/*Una tienda aplica un descuento del 15% para las compras que incluyan más de 10 artículos
iguales cuyo precio sea superior a 40 euros. Tu programa debe comprobar y calcular la cantidad a
pagar sabiendo el número de artículos y el precio de cada uno.

Ejemplo si compras 20 artículos de 10 dólares se te descuenta un 15% del total pagarías 20*10 - 20*10*0.15 =
170 dólares.
*/

const dataFromConsole = process.argv;


const articulo = dataFromConsole[2];

const valor_por_articulo = dataFromConsole[3];


//Creamos una variable con una cantidad de articulos
//let articulo = 20;

//Creamos una variable con el valor de cada articulo
//let valor_por_articulo= 10;

let valor_completo = articulo * valor_por_articulo;

if (articulo > 10 ){
    console.log("Adquieres mas de 10 articulos");
    

    if(valor_completo > 40){
        console.log("Adquieres el descuento");}

        let descuento =  articulo * valor_por_articulo- articulo * valor_por_articulo*0.15;
        console.log("En total por pagar es:", descuento);
   
}

else{
    console.log("No adquieres descuentos");
}