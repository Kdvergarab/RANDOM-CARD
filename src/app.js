/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add("generateRandompinta");
  document.querySelector(".card").innerHTML.add = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = [
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
    "j",
    "Q",
    "K"
  ];
  let indexnumbers = Math.floor(math.random() * numbers.length);
  return numbers[indexnumbers];
};

let generateRandompinta = () => {
  let pinta = ["diamante", "picas", "corazon", "trebol"];
  let indexpinta = Math.floor(math.random() * pinta.length);

  return pinta[indexpinta];
};
