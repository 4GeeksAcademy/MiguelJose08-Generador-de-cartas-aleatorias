import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



  const valores = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", 'Q', "K", "A"];
  const palos = ["heart", "diamond", "spade", "club"]
  const iconos = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣"
  }

  const randomItems = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  }

  function generarCarta(){

  const paloAletorio = randomItems(palos);
  const valorAleatorio = randomItems(valores);

  const contenedorCarta = document.querySelector('.card')
  const paloSuperior = document.querySelector('.top-suit');
  const valoresCarta = document.querySelector('.number');
  const paloInferior = document.querySelector('.bottom-suit');

  paloSuperior.textContent =  iconos[paloAletorio];
  valoresCarta.textContent =  valorAleatorio;
  paloInferior.textContent =  iconos[paloAletorio];

  contenedorCarta.classList.remove("heart", "diamond", "spade", "club");
  contenedorCarta.classList.add(paloAletorio);

  };

  window.onload = function (){
    generarCarta()

    const boton = document.querySelector('#btn-generar');
    boton.addEventListener("click", generarCarta)

    setInterval(generarCarta, 10000);

    const inputAncho = document.querySelector('#input-ancho');
    const inputAlto = document.querySelector('#input-alto');
    const botonTamano = document.querySelector('#btn-tamano');

    botonTamano.addEventListener("click", () => {
      const nuevoAncho = inputAncho.value;
      const nuevoaAlto = inputAlto.value;

      const contenedorCarta = document.querySelector('.card');

      if (nuevoAncho !== ""){
        contenedorCarta.style.width = nuevoAncho + 'px';
      }
      if (nuevoaAlto !== ""){
        contenedorCarta.style.height = nuevoaAlto + 'px';
      }

    });


  };
  


