/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./style.css";

// window.onload = () => {
//   document.querySelector(".card").classList.add(generateRandompinta());
//   document.querySelector(".card").innerHTML = generateRandomNumber();
// };

// let generateRandomNumber = () => {
//   let numbers = [
//     "A",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "j",
//     "Q",
//     "K"
//   ];
//   let indexnumbers = Math.floor(Math.random() * numbers.length);
//   return numbers[indexnumbers];
// };

// let generateRandompinta = () => {
//   let pinta = ["diamante", "picas", "corazon", "trebol"];
//   let indexpinta = Math.floor(Math.random() * pinta.length);

//   return pinta[indexpinta];
// };

function randomnumero(numeros) {
  return numeros[Math.floor(Math.random() * numeros.length)];
}

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
  "j",
  "Q",
  "K"
];
// console.log(randomnumero(numeros));

document.getElementById("numero").innerHTML = randomnumero(numeros);

function randompinta(pinta) {
  return pinta[Math.floor(Math.random() * pinta.length)];
}

let pinta = ["♣", "♠", "♥️", "♦️"];
// console.log(pinta);

let pintaseleccionada = [randompinta(pinta)];

if (pintaseleccionada == "♥️") {
  document.getElementById("arriba-pinta").style.color = "red";
  document.getElementById("abajo-pinta").style.color = "red";
} else if (pintaseleccionada == "♦️") {
  document.getElementById("arriba-pinta").style.color = "red";
  document.getElementById("abajo-pinta").style.color = "red";
}

document.getElementById("arriba-pinta").innerHTML = pintaseleccionada;
document.getElementById("abajo-pinta").innerHTML = pintaseleccionada;

// function random_item(items)
// {

// return items[Math.floor(Math.random()*items.length)];

// }

// var items = [254, 45, 212, 365, 2543];
// console.log(random_item(items));

/* <p id="demo"></p>

<script>
let x = Math.floor((Math.random() * 100) + 1);
document.getElementById("demo").innerHTML = x;
</script> */
