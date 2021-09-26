'use strict';

const form = document.querySelector('form');
const weight = document.querySelectorAll('input')[0];
const height = document.querySelectorAll('input')[1];
const resultPlace = document.querySelector('span');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    resultPlace.innerText = (parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000));
    console.log(resultPlace)
});



