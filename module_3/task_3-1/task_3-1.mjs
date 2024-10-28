"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");
let wakeUpTime = 8;
if (wakeUpTime == 7) {
  printOut("Wake up time is = " + wakeUpTime);
  printOut("I can take the bus to school");
} else if (wakeUpTime == 8) {
  printOut("Wake up time is = " + wakeUpTime);
  printOut("I can take the train to school"); 
} else if (wakeUpTime < 9) {
  printOut("Wake up time is = " + wakeUpTime);
  printOut("I have to take the car to school"); 
}
  printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let PosorNeg = 0;
if (PosorNeg > 0) {
  printOut("Positive");
}
else if (PosorNeg < 0) {
  printOut("Negative");
} 
else if (PosorNeg == 0) {
  printOut("Zero");}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const minimumSize = 4;
const maximumSize = 6;
let random = Math.floor(Math.random() * 8) + 1;
if (random < minimumSize) {
  printOut("This image is too small");
} else if (random > maximumSize) {
  printOut("This image is too big");
} else {
  printOut("Thank you");
}


printOut( "photo is " + random);
printOut(newLine);

printOut("--- Part 7 /|\ ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
  "Jun", "Juli", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
  if (monthName.includes("r")) {
    printOut("You must take vitamin D");
  } else {
    printOut("You do not need to take vitamin D");}
printOut("The month is " + monthName);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName == "February") {
  printOut("This month has 28 days");
} else if (monthName == "April" || monthName == "Jun" || monthName == "September" || monthName == "November") {
  printOut("This month has 30 days");
} else {
  printOut("This month has 31 days");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if (monthName == "Mars" || monthName == "Mai") {
  printOut("Gallery is closed");
}
else if (monthName == "April") {
  printOut("Gallery is open in the building next door");
}
else {
  printOut("Gallery is open");
}
printOut(newLine);
