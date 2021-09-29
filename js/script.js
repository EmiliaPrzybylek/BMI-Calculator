'use strict';

const form = document.querySelector('form');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const resultPlace = document.querySelector('span');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    resultPlace.innerText = Math.round(parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000) * 100) / 100;

});


function BMI() {
    if(resultPlace <= 16) {
        resultPlace.innerHMTL = "Wygłodzenie";
    } if (resultPlace >= 17) {
        resultPlace.innerHTML = "Niedowaga";
    } if (resultPlace >= 18.5) {
        resultPlace.innerHTML = "Wartośc prawidłowa";
    } if (resultPlace >= 25) {
        resultPlace.innerHTML = "Nadwaga";
    } if (resultPlace >= 30) {
        resultPlace.innerHTML = "I stopień otyłości";
    } if (resultPlace >= 35) {
        resultPlace.innerHTML = "II stopień otyłości";
    } if (resultPlace >= 40){
        resultPlace.innerHTML = "Skrajna otyłość";
    }
}
