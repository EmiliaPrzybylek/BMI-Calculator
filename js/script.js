'use strict';

const form = document.querySelector('form');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const resultPlace = document.querySelector('span');
const description = document.querySelector('.description');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    const res = Math.round(parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000) * 100) / 100;
    
    resultPlace.innerText = res;
    let result = "";

     if (res < 16) {
        result = "Wygłodzenie";
     } 
     else if (res >= 16 && res <= 16.99) {
        result = "Wychudzenie";
     } 
     else if (res >= 17 && res <= 18.49) {
        result = "Niedowaga";
     } 
     else if (res >= 18.5 && res <= 24.99) {
        result = "Wartość prawidłowa";
     } 
     else if (res >= 25 && res <= 29.99) {
        result = "Nadwaga";
     } 
     else if (res >= 30 && res <= 34.99) {
        result = "I stopień otyłości";
     } 
     else if (res >= 35 && res <= 39.99) {
        result = "II stopień otyłości";
     } 
     else {
        result = "Skrajna otyłość";
     }

      description.innerText = result;
     
   });
   
