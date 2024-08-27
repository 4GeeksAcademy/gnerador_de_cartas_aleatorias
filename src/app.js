/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

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
  function heartGenerator() {
    const generateRandomArray = array => {
      return Math.floor(Math.random() * array.length);
    };

    let randomPalos = generateRandomArray(palos);

    let palo2 = palos[randomPalos];

    return palo2;
  }
  let generatedPalo = heartGenerator();
  document.querySelector(".heart1").innerHTML = generatedPalo;
  document.querySelector(".heart2").innerHTML = generatedPalo;

  function numberdGenerator() {
    const generateRandomArray = array => {
      return Math.floor(Math.random() * array.length);
    };

    let randomNumeros = generateRandomArray(numeros);

    let numero = `${numeros[randomNumeros]}`;

    return numero;
  }
  document.querySelector(".number").innerHTML = numberdGenerator();
};
