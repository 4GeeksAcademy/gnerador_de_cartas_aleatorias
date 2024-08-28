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
  let suit = ["♦", "♥", "♠", "♣"];
  let credits = [
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
  const generateRandomArray = array => {
    return Math.floor(Math.random() * array.length);
  };

  function heartGenerator() {
    let randomSuit = generateRandomArray(suit);

    let suit2 = suit[randomSuit];

    return suit2;
  }

  function numberdGenerator() {
    let randomCredits = generateRandomArray(credits);

    let credit = `${credits[randomCredits]}`;

    return credit;
  }
  function upDateCard() {
    let generatedSuit = heartGenerator();

    let symbol1 = document.querySelector(".symbol1");
    let symbol2 = document.querySelector(".symbol2");
    if (generatedSuit == "♥" || generatedSuit == "♦") {
      symbol1.style.color = "red";
      symbol2.style.color = "red";
    } else {
      symbol1.style.color = "black";
      symbol2.style.color = "black";
    }
    symbol1.innerHTML = generatedSuit;
    symbol2.innerHTML = generatedSuit;

    document.querySelector(".number").innerHTML = numberdGenerator();
  }
  document.querySelector("#change").addEventListener("click", () => {
    upDateCard();
  });
  upDateCard();

  setInterval(upDateCard, 10000);

  function cardDimentions() {
    let width = document.querySelector("#width").value;
    let heigth = document.querySelector("#heigth").value;

    let card = document.getElementById("card");
    card.style.width = width + "px";
    card.style.height = heigth + "px";

    let fontSize = Math.min(width, heigth) * 0.2;
    let palosFontSize = fontSize * 0.7;
    let numberFontSize = fontSize;

    document.querySelector(".symbol1").style.fontSize = `${palosFontSize}px`;
    document.querySelector(".symbol2").style.fontSize = `${palosFontSize}px`;
    document.querySelector(".number").style.fontSize = `${numberFontSize}px`;
  }

  document.querySelector("#width").addEventListener("input", cardDimentions);
  document.querySelector("#heigth").addEventListener("input", cardDimentions);
};
