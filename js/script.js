'use strict';

const form = document.querySelector('form');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const resultPlace = document.querySelector('span');
const description = document.querySelector('.description');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    resultPlace.innerText = Math.round(parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000) * 100) / 100;

    if (resultPlace.innerText <= 16) {
        description.innerText = "Wygłodzenie";
     } if (resultPlace.innerText >= 17) {
        description.innerText = "Niedowaga";
     } if (resultPlace.innerText >= 18.5) {
        description.innerText = "Wartość prawidłowa";
     } if (resultPlace.innerText >= 25) {
        description.innerText = "Nadwaga";
     } if (resultPlace.innerText >= 30) {
        description.innerText = "I stopień otyłości";
     } if (resultPlace.innerText >= 35) {
        description.innerText = "II stopień otyłości";
     } if (resultPlace.innerText >= 40){
        description.innerText = "Skrajna otyłość";
     }
});


