"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 30;
const ageMark = 30; 

// console.log(ageJohn);
// console.log(ageMark);


// Deklaration
let isJohnOlder, isJohnEqual;

// test | Logische Aussage

isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe

console.log("ageJohn: ", ageJohn);
console.log("ageMark: ", ageMark);
console.log("isJohnOlder: ", isJohnOlder);
console.log("isJohnEqual: ", isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (isJohnOlder)
// if(ageJohn > ageMark)
// if(true)
// if(false)
// {
//     console.log("John ist älter.");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (ageJohn > ageMark) 
// if (true)
// if (false)
// if (isJohnOlder)
// {
//     console.log("John ist älter.");
// } 
// else 
// {
//     console.log("John ist jünger.");
// }

