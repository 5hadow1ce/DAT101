"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const two = 2;
const three = 3;
const forth = 4;
const six = 6;
let equals = two + (three * (two - forth)) * six;

printOut("2 + (3 * (2 - 4)) * 6 = " + equals);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const inch = 25.4;
let meter = 25;
let cm = 34;
let metertoCm = meter * 100;
let mcmtoInch = (metertoCm + cm) / (inch / 10); 
let todesimal = mcmtoInch.toFixed(2); 
printOut("25 meter and 34 cm is equal to " + todesimal + " inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const days = 3;
const hours = 12;
const minutes = 14;
const seconds = 45;
let totalminutes = (days * 24 * 60) + (hours * 60) + minutes + (seconds / 60);
printOut("3 days, 12 hours, 14 minutes and 45 seconds is equal to " + totalminutes + " minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let convertMinutes = 6322.52;
let Mtoday = Math.floor(convertMinutes / (24 * 60));
let Mtohours = Math.floor((convertMinutes % (24 * 60)) / 60);
let Mtominutes = Math.floor(convertMinutes % 60);
let Mtoseconds = Math.floor((convertMinutes % 1) * 60);
printOut("6322.52 minutes is equal to " + Mtoday + " days, " + Mtohours + " hours, " + Mtominutes + " minutes and " + Mtoseconds + " seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const nokVerdi = 76;
const dollarVerdi = 8.6;
const USD = 54
let nokToUsd = USD * nokVerdi;
let nokToUsdToDollar = nokToUsd / dollarVerdi;
let nokToUsdRound = Math.floor(nokToUsdToDollar);
printOut("54 USD is equal to " + nokToUsdRound + " NOK");
printOut(nokToUsdRound + " NOK is equal to " + USD + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text = "There is much between heaven and earth that we do not understand."
let textLength = text.length;
let text19 = text.charAt(19);
let textBetween = text.substring(35, 43);
let textearth = text.indexOf("earth");
printOut(text);
printOut("The text has " + textLength + " characters");
printOut("The character in the 19th position is: " + text19);
printOut("The characters between position 35 and 43 is: " + textBetween);
printOut("The word 'earth' is starting at position: " + textearth);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const is5grater = 5 > 3;
const is7grater = 7 >= 7;
const isab = "a" > "b";
const is1a = 1 < "a";
const islot = 2500 < "abcd";
const isthesame = "arne" !== "thomas";
const is2e5 = 2 == 5;
const statment = "abcd" < "bcd";

printOut("is 5 grater than 3 " + is5grater);
printOut("is 7 grater or equal to 7 " + is7grater);
printOut("is a grater than b " + isab);
printOut("is 1 less then a " + is1a);
printOut("is 2500 grater than abcd " + islot);
printOut("arne is not equal to thomas " + isthesame);
printOut("(2 Equals 5) this statement is " + is2e5);
printOut("(abcd is grater than bcd) is this false? its " + statment);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text254 = "254";
let tonumb254 = Number(text254);
const text57 = "57.23";
let tonumb57 = Number(text57);
const kroner25 = "25 kroner";
let tonumb25 = Number(kroner25.replace(" kroner", ""));

printOut( "\"254\" is " + tonumb254);
printOut( "\"57.23\" is " + tonumb57);
printOut("\"25 kroner\" is " +tonumb25);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.floor(Math.random() * 360) + 1;
printOut("Random number is " +r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const totalday = 131;
let week = Math.floor(totalday / 7);
let day = totalday % 7;

printOut(totalday + " days is equal to " + week + " weeks and " + day + " days");
printOut(newLine);
