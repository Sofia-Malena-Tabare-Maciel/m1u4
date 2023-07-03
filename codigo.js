var op1 = 0 
var op2 = 1000
var numerocincoquince = op2 - op1;
console .log("He caminado a pie " + numerocincoquince)

var op3 = 1000
var op4 = 10000
var miNumeroDos = op4 - op3;
console .log("He ido en bicleta " + miNumeroDos)

var op5 = 10000
var op6 = 30000
var miNumeroTres = op6 - op5;
console .log("He ido en colectivo " + miNumeroTres) 

var op7 = 30000 
var op8 = 100000
var miNumeroCuatro = op8 - op7;
console .log("He ido en auto " + miNumeroCuatro)

var miSuma = numerocincoquince + miNumeroDos + miNumeroTres + miNumeroCuatro + 100000;
console .log ("He ido a pie, en bicicleta, en colectivo, en auto y en avión aproximadamente en kilometros " + miSuma)

let contador = 0;
while(contador < 10){
    console .log(0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 9 , 10);
    contador = contador + 1;
}

const numeros = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]
const numeroUno = numeros[0]
const numeroDos = numeros[10]

if (numeroDos > numeroUno) {
    console .log("Si, 10 es mayor a 0");
} else {
    console .log("No, 0 no es mayor a 10");
}
