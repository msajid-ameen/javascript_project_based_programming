let cmToInch = 2.54;
let kiloToPounds = 2.2046;
let bmiStatus = "BMI Status:"

// Taking Values from Users,   Height in cm and Weight in pounds
let cm = Number(prompt("Enter Your Height in cm"));
let pounds = Number(prompt("Enter Your Weight in pounds"));
console.log(" Height " + cm + " cm ");
console.log(" Weight " + pounds + " pounds ");
let height = cm / cmToInch;
let meters = height / 39.370;
let kilos = pounds / kiloToPounds;
console.log("Your Height is ", meters.toFixed(2),"in Meters");
console.log("Your Weight is ", kilos.toFixed(2), "in Kg");
let bmi = kilos/meters**2;
console.log("Your BMI is = ", bmi.toFixed(2));
if (bmi <= 18.4){
    console.log(bmiStatus, "Underweight");
}else if(bmi >= 18.5 && bmi <= 24.9){
    console.log(bmiStatus, "Normal");
}else if(bmi >= 25.0 && bmi <= 39.9){
    console.log(bmiStatus, "Overweight");
}else if(bmi >= 40.0){
    console.log(bmiStatus, "Obese");
}