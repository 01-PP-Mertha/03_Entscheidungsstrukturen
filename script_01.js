"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment

const ageJohn = 25;
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
if(ageJohn > ageMark)
// if(true)
// if(false)
{
    console.log("John ist älter.");
}

