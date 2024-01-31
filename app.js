let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10

function asignarTextoElemento(elemento,texto){
    let elementoHtml= document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos==1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    /*let valorCaja=docuement.querySelector('#valorUsuario');
    valorCaja='';*/
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles`);
    }else{
        //Si el numero generado esta en laa lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function condicionesiniciales() {
    //indicar mensajes iniciales
    asignarTextoElemento('h1','Juego del número secreto!'); 
    asignarTextoElemento('p',`indica un numero del 1 al ${numeroMaximo}`);
    //Generar numero secreto
    numeroSecreto=generarNumeroSecreto();
    //inicializar el numero de intentos 
    intentos=1;
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    condicionesiniciales();
    
}
condicionesiniciales();








/*Ejercicios
function holaMundo(){
    console.log("¡Hola, mundo!");
}
function nombreTuyo(nombre){
    console.log(`¡Hola, ${nombre}!`);
}
function dobleNumero(numero){
    return numero*2;
}
function promedioDeTres(num1,num2,num3){
    return (num1+num2+num3)/3;
}
function numeroMayor(num1,num2){
    let mayor;
    if(num1<num2){
        mayor=num2;
    }else{
        mayor=num1;
    }
    return mayor;
}
function xSiMismo(numero){
    return numero*numero;
}

function imc(altura, peso) {
    return peso/(altura*altura);
}

function factorial(numero) {
    let facotrial=0;
    let aux=0;
    while(aux<=numero){
        aux++;
        facotrial=factorial+aux;
    }
}
function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);



function pesos(dolares){
    return dolares*17.21;
}
function rectangulo(base, altura){
    let area=base*altura;
    let perimetro=base*2+altura*2;
    return `el area es: ${area} el perimetro es: ${perimetro}`;
}

function circulo(radio){
    let area=3.14*(radio*radio);
    let perimentro=2*3.14*radio;
    return `el area del circulo es ${area} y el perimetro es ${perimentro}`;
}

function tablas(numero){
    let contador=0;
    while(contador<=10){
        contador++;
        let multiplicacion=contador*numero;
        console.log(`${contador}*${numero}=${multiplicacion}`);
    }
}
*/
//1
let listaGenerica=[];
//2
let lenguajesDeProgramacion=['Javascript','C','C++','Kotlin','Python'];
//3
lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('GoLang');
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

//4
function lenguajes(listaLenguajes){
    for(let i=0;i<listaLenguajes.length;i++){
        console.log(lenguajes[i]);
    }
}
lenguajes(lenguajesDeProgramacion);
//5
function lenguajesInverso(listaLenguajes){
    for(let i=listaLenguajes.length;i>0;i--){
        console.log(lenguajes[i]);
    }
}
lenguajesInverso(lenguajesDeProgramacion);
//6
let promedioNumeros=[1,2,3,4,5,6,7,8,9,10]
function promedio(listaNumeros){
    let aux=0;
    for(let i=0;i<promedioNumeros.length;i++){
        aux=aux+promedioNumeros[i];
    }
    aux=aux/promedioNumeros.length;
    console.log(`El promedio de la lista de numeros es ${aux}`);
}
//7
let NumeroMayorMenor=[1,2,3,4,5,6,7,8,9,10]
function NumeroMayorYMenor(NumeroMayorMenor){
    let mayor=0;
    let menor=0;
    for(let i=0;i<sumaNumeros.length-1;i++){
        if(mayor<sumaNumeros[i]){
            mayor=sumaNumeros[i];
        }
        if(menor>sumaNumeros[i]){
            menor=sumaNumeros[i];
        }
    }
    console.log(`El numero mayor es ${mayor} y el menor es ${menor}`);
}
//8
let sumaNumeros=[1,2,3,4,5,6,7,8,9,10]
function promedio(listaNumeros){
    let aux=0;
    for(let i=0;i<sumaNumeros.length-1;i++){
        aux=aux+sumaNumeros[i];
    }
    console.log(`La suma de la lsita de numeros es ${aux}`);
}
//9
let NumerosParametro=[1,2,3,4,5,6,7,8,9,10]
function NumeroEnLaLista(parametroDeLista){
    if(parametroDeLista>9 || parametroDeLista<0){
     console.log(`El valor ${parametroDeLista} no existe en la lista`);   
    }else{
        console.log(NumerosParametro[parametroDeLista]);
    }
}
//10
let PrimeraLst=[1,2,3,4,5,6,7,8,9,10];
let SegundaLst=[10,9,8,7,6,5,4,3,2,1];
function sumaListas(lista1,lista2){    
    let sumaListas=[];
    for(let i=0;i<10;i++){
        sumaListas[i]= PrimeraLst[i]+SegundaLst[i];
    }
    return sumaListas;
}
//11
let PrimeraLsta=[1,2,3,4,5,6,7,8,9,10];
function cuadradoDeLista(PrimeraLsta){
    for(let i=0;i<10;i++){
        PrimeraLsta[i]= PrimeraLsta[i]*PrimeraLsta[i];
    }
}







