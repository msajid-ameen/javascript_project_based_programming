// This is project Miles-to-kilometers converter javascript file

// The conversion factor for miles to kilometers
let milesToKilometers = 1.60934;

// Ask User for Data in Miles
let miles = prompt("Please enter the distance in miles.");
console.log(miles, "miles");

// Use the conversion factor to divide miles into kilometers
let kilometers = miles / milesToKilometers;
console.log(kilometers, "kilometers");

let sentence = " The distance of " + kilometers + " kms is equal to " + miles + " miles ";
console.log(sentence);