"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todayDateNO() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
    printOut(formattedDate);
}

todayDateNO();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function todayDNO() {
    let today = new Date();
    let formattedDate = today.toLocaleDateString("no-NB", {
        weekday: "long", year: "numeric", month: "long", day: "numeric",
    });
    return formattedDate;
}
function countDown() {
    let today = new Date();
    let toXKO = new Date("2025-05-14");
    let timeDiff = toXKO - today;
    let daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let exact = daysLeft + " days, " + hoursLeft + " hours, " + minutesLeft + " minutes, " + secondsLeft + " seconds";
    return exact;
}

printOut("to day is " + todayDNO() + " so its " + countDown() + " left to 2XKO");
printOut("Game on!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function radiusprintOut(radius) {
    let area = Math.PI * Math.pow(radius, 2);
    let circumference = 2 * Math.PI * radius;
    let diameter = 2 * radius;
    return "Area: " + area.toFixed(2) + ", Circumference: " + circumference.toFixed(2) + ", Diameter: " + diameter;
}
printOut(radiusprintOut(12));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function WidthHeightRectangle(width, height) {
    let area = width * height;
    let circumference = 2 * (width + height);
    return "Area: " + area + ", Circumference: " + circumference;
}
let width = 10;
let height = 24;

printOut("Width:" + width + ", Height:" + height + " " + WidthHeightRectangle(width, height));
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function CelsiusFahrenheitKelvin(tempature, unit) {
    let celsius = tempature;
    let fahrenheit = 0;
    let kelvin = 0;
    if (unit === "C") {
        fahrenheit = (celsius * 9 / 5 + 32);
        kelvin = celsius + 273.15;
    } else if (unit === "F") {
        celsius = (tempature - 32) * 5 / 9;
        fahrenheit = tempature;
        kelvin = celsius + 273.15;
    } else if (unit === "K") {
        celsius = tempature - 273.15;
        fahrenheit = celsius * 9 / 5 + 32;
        kelvin = tempature;
    }
    return "Celsius: " + Number.parseInt(celsius) + ", Fahrenheit: " + Number.parseInt(fahrenheit) + ", Kelvin: " + Number.parseInt(kelvin);
}
printOut(CelsiusFahrenheitKelvin(150, "k"));
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function VATCalculator(price, vat) {
    vat = vat.toLowerCase();
    if (vat === "food")
        return (100 * price / 115).toFixed(2);
    if (vat === "normal")
        return (100 * price / 125).toFixed(2);
    if (vat === "hotel" || vat === "transport" || vat === "cinema")
        return (100 * price / 110).toFixed(2);
    else
        return NaN;
}
let price = 150;
let VAT = "Normal";
VATCalculator(price, VAT);
if (isNaN(VATCalculator(price, VAT))) {
    printOut("Invalid VAT group");
}
 else printOut("price is " + price + " and VAT is " + VAT + " so price without VAT is " + VATCalculator(price, VAT));
let price2 = 355;
let VAT2 = "Food";
VATCalculator(price2, VAT2);
if (isNaN(VATCalculator(price2, VAT2))) {
    printOut("Invalid VAT group");
}
    else printOut("price is " + price2 + " and VAT is " + VAT2 + " so price without VAT is " + VATCalculator(price2, VAT2));
let price3 = 1000;
let VAT3 = "Hotel";
VATCalculator(price3, VAT3);
if (isNaN(VATCalculator(price3, VAT3))) {
    printOut("Invalid VAT group");
}
    else printOut("price is " + price3 + " and VAT is " + VAT3 + " so price without VAT is " + VATCalculator(price3, VAT3));
let price4 = 500;
let VAT4 = "cin";
VATCalculator(price4, VAT4);
if (isNaN(VATCalculator(price4, VAT4))) {
    printOut("Invalid VAT group");
}
    else printOut("price is " + price4 + " and VAT is " + VAT4 + " so price without VAT is " + VATCalculator(price4, VAT4));
 printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function SpeedDistanceTime(speed, distance, time) {
    if (isNaN(speed)) {
        return distance / time;
    }
    if (isNaN(distance)) {
        return speed * time;
    }
    if (isNaN(time)) {
        return distance / speed;
    }
    else return NaN;
}
let speed = 100;
let distance = 200;
let time = "time";

SpeedDistanceTime(speed, distance, time);
if (isNaN(SpeedDistanceTime(speed, distance, time))) {
    printOut("missing value");
}
else printOut("speed is " + speed + "km/h and distance is " + distance + "km so time is " + SpeedDistanceTime(speed, distance, time) + "h");

let speed2 = 100;
let distance2 = "distance";
let time2 = 2;

SpeedDistanceTime(speed2, distance2, time2);
if (isNaN(SpeedDistanceTime(speed2, distance2, time2))) {
    printOut("missing value");
}
else printOut("speed is " + speed2 + "km/h and time is " + time2 + "h so distance is " + SpeedDistanceTime(speed2, distance2, time2)+ "km");

let speed3 = "speed";
let distance3 = 200;
let time3 = 2;

SpeedDistanceTime(speed3, distance3, time3);
if (isNaN(SpeedDistanceTime(speed3, distance3, time3))) {
    printOut("missing value");
}
else printOut("distance is " + distance3 + " and time is " + time3 + " so speed is " + SpeedDistanceTime(speed3, distance3, time3) + "km/h");

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function TextMaxSizeCharAddATEnd(text, max, char, end) {
   if (text.lenght >= max) {
         return text;
    }
    let charToAdd = max - text.length;
    let padding = char.repeat(charToAdd);
    if (end) {
        return text + padding;
    }
    else {
        return padding + text;
    }
}
let text = "Is This Text";
let max = 15;
let char = "?";
let end = true;
printOut("*" + TextMaxSizeCharAddATEnd(text, max, char, end) + "*");

let text2 = "This Is Text";
let max2 = 20;
let char2 = "!";
let end2 = false;
printOut("*" + TextMaxSizeCharAddATEnd(text2, max2, char2, end2) + "*");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathExpressions(lines) { //trengte faktisk hjelp til denne
    let start = 1;

    for (let line = 1; line <= lines; line++) {
        let leftSum = 0;
        let rightSum = 0;
        let leftTerms = [];
        let rightTerms = [];

        for (let i = 0; i < line + 1; i++) {
            leftTerms.push(start);      
            leftSum += start;           
            start++;
        }

        for (let j = 0; j < line; j++) {
            rightTerms.push(start);     
            rightSum += start;          
            start++;
        }

        //printOut(`Line ${line}: ${leftTerms.join(" + ")} = ${rightTerms.join(" + ")}`);

        if (leftSum !== rightSum) {
            pirntOut(`Mismatch on line ${line}: Left sum = ${leftSum}, Right sum = ${rightSum}`);
            return;
        }
    }

    printOut("Maths fun!");
}

testMathExpressions(200);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
printOut("Factorial of 9 " + factorial(9));
printOut(newLine);