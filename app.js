//let title = document.querySelector("h1");
//title.innerHTML = "juego del numero secreto";

//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "indica un numero del 1 al 10";
let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Asertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veses"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuario no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "el numero secreto es menor");
    } else {
      asignarTextoElemento("p", "el numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja() {
  valorCaja = document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumeroSorteado);
  //si ya sorteamos todos los numeros
  if (listaNumeroSorteado.length == numeroMaximo) {
    asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
  } else {
    if (listaNumeroSorteado.includes(numeroGenerado)) {
      //si el numero generado esta incluido en la lista
      return generarNumeroSecreto();
    } else {
      listaNumeroSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo} `);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar caja
  limpiarCaja();
  //mensaje de intervalos de numeros
  //generar numero aleatorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton del juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
