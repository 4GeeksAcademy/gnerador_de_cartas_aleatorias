/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //paso 1: declarar variables de palos y numeros
  //paso 2: declarar funcion que retornara un palo random y un numero random en base a esos dos arrays
  //paso 3: ejecutar la funcion
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let palos2 = ["♦", "♥", "♠", "♣"];
  function cardGenerator() {
    const generateRandomArray = array => {
      return Math.floor(Math.random() * array.length);
    };

    let randomPalos = generateRandomArray(palos);
    let randomNumeros = generateRandomArray(numeros);
    let randomPalos2 = generateRandomArray(palos2);

    let card = `${palos[randomPalos]} ${numeros[randomNumeros]} ${palos[randomPalos2]}`;

    return card;
  }
  document.querySelector(".card").innerHTML = cardGenerator();
};
