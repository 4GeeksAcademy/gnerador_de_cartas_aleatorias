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

  function numberdGenerator() {
    const generateRandomArray = array => {
      return Math.floor(Math.random() * array.length);
    };

    let randomNumeros = generateRandomArray(numeros);

    let numero = `${numeros[randomNumeros]}`;

    return numero;
  }
  function upDateCard() {
    let generatedPalo = heartGenerator();
    let colorClass = "";
    if (generatedPalo === "♠" || generatedPalo === "♣") {
      colorClass = "black";
    } else {
      colorClass = "red";
    }
    let heart1 = document.querySelector(".heart1");
    let heart2 = document.querySelector(".heart2");
    heart1.innerHTML = generatedPalo;
    heart2.innerHTML = generatedPalo;
    heart1.className = `heart1 ${colorClass}`;
    heart2.className = `heart2 ${colorClass}`;

    document.querySelector(".number").innerHTML = numberdGenerator();
  }

  upDateCard();

  setInterval(upDateCard, 10000);
  document.querySelector("#change").addEventListener("click", upDateCard);
};
