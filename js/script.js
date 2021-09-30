'use strict';

const form = document.querySelector('form');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const resultPlace = document.querySelector('span');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    resultPlace.innerText = Math.round(parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000) * 100) / 100;

});


