'use strict';

const form = document.querySelector('form');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const resultPlace = document.querySelector('span');
const description = document.querySelector('.description');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    resultPlace.innerText = Math.round(parseFloat(weight.value) / (parseFloat(height.value) * parseFloat(height.value) / 10000) * 100) / 100;

  let result = "";

     if (resultPlace.innerText < 16) {
        result = "Wygłodzenie";
     } 
     if (resultPlace.innerText >= 16 ) {
        result = "Wychudzenie";
     } 
     if (resultPlace.innerText >= 17) {
        result = "Niedowaga";
     } 
     if (resultPlace.innerText >= 18.5) {
        result = "Wartość prawidłowa";
     } 
     if (resultPlace.innerText >= 25) {
        result = "Nadwaga";
     } 
     if (resultPlace.innerText >= 30) {
        result = "I stopień otyłości";
     } 
     if (resultPlace.innerText >= 35) {
        result = "II stopień otyłości";
     } 
     if (resultPlace.innerText >= 40) {
        result = "Skrajna otyłość";
     }
      description.innerText = result;
     
   });
   

   //   if (resultPlace.innerText <= 16) {
   //      result = "Wygłodzenie";
   //   } 
   //   else if (resultPlace.innerText >= 17) {
   //      result = "Niedowaga";
   //   } 
   //   else if (resultPlace.innerText >= 18.5) {
   //      result = "Wartość prawidłowa";
   //   } 
   //   else if (resultPlace.innerText >= 25) {
   //      result = "Nadwaga";
   //   } 
   //   else if (resultPlace.innerText >= 30) {
   //      result = "I stopień otyłości";
   //   } 
   //   else if (resultPlace.innerText >= 35) {
   //      result = "II stopień otyłości";
   //   } 
   //   else (resultPlace.innerText >= 40) {
   //      result = "Skrajna otyłość";
   //   }

   //  description.innerText = result;


// ///////////////////////////////////////////////
//     if (resultPlace.innerText >= 40) {
//       result = "Skrajna otyłość";
//    } 
//    else if (resultPlace.innerText >= 35) {
//       result = "II stopień otyłości";
//    } 
//    else if (resultPlace.innerText >= 30) {
//       result = "I stopień otyłości";
//    } 
//    else if (resultPlace.innerText >= 25) {
//       result = "Nadwaga";
//    } 
//    else if (resultPlace.innerText >= 18.5) {
//       result = "Wartość prawidłowa";
//    } 
//    else if (resultPlace.innerText >= 17) {
//       result = "Niedowaga";
//    } 
//    else (resultPlace.innerText <= 16) {
//       result = "Wygłodzenie";
//    }

//   description.innerText = result;

// /////////////////////////////////////////////

// if (resultPlace.innerText < 16) {
//    result = "Wygłodzenie";
// } 
// else if (resultPlace.innerText >= 16 && bmi < 16.99) {
//    result = "Wychudzenie";
// } 
// else if (resultPlace.innerText >= 17 && bmi < 18.49) {
//    result = "Niedowaga";
// } 
// else if (resultPlace.innerText >= 18.5 && bmi < 24.99) {
//    result = "Wartość prawidłowa";
// } 
// else if (resultPlace.innerText >= 25 && bmi < 29.99) {
//    result = "Nadwaga";
// } 
// else if (resultPlace.innerText >= 30 && bmi < 34.99) {
//    result = "I stopień otyłości";
// } 
// else if (resultPlace.innerText >= 35 && bmi < 39.99) {
//    result = "II stopień otyłości";
// } 
// else (resultPlace.innerText >= 40) {
//    result = "Skrajna otyłość";
// }
//  description.innerText = result;