// This is project Kilometers-to-Miles converter javascript file

// The conversion factor for miles to kilometers
let kilometersToMiles =  0.6214;

// Ask User for Data in Miles
let kilometers = prompt("Please enter the distance in Kilometers.");
console.log(kilometers, "Kilometers");

// Use the conversion factor to divide miles into kilometers
let miles = kilometers / kilometersToMiles;
console.log(miles, "Miles");

let sentence = " The distance of " + kilometers + " kms is equal to " + miles + " miles ";
console.log(sentence);