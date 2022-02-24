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

window.onload = () => {
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

  let numeroselecionado = numeros[Math.floor(Math.random() * (13 - 0))];
document.getElementById("numero").innerHTML =x;
};
<p id="demo"></p>

<script>
let x = Math.floor((Math.random() * 100) + 1);
document.getElementById("demo").innerHTML = x;
</script>
