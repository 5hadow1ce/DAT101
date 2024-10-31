"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
for (let e = 1; e <= 10; e++) {
    countUp += e + " ";
}
printOut(countUp.trim());

let countDown = "";
for (let n = 10; n >= 1; n--) {
    countDown += n + " ";
}
printOut(countDown.trim());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomNumber = Math.floor(Math.random() * 60) + 1;
let guess = 0;
while (guess !== randomNumber) {
    guess = Math.floor(Math.random() * 60) + 1;
}
printOut("You guessed the right number! " + randomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomNum = Math.floor(Math.random() * 1000000) + 1;
let guessing = 0;
let start = Date.now();
while (guessing !== randomNum) {
    guessing = Math.floor(Math.random() * 1000000) + 1;
}
let end = Date.now();
let time = end - start;
printOut("You guessed the right number! " + randomNum);
printOut("It took " + time + " milliseconds to guess the right number.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let findPrime = 0;
let primes = [];

for (let i = 2; i <= 200; i++) {
    let isPrime = true;
    let j = 2;

    while (j < i) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
        j++;
    }

    if (isPrime) {
        primes.push(i);
        findPrime++;
    }
}
printOut("There are " + primes + " prime numbers between 1 and 200.");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) { // Loop for 7 rows
    let rowOutput = ""; // Initialize an empty string to store each row's output
    
    for (let col = 1; col <= 9; col++) { // Loop for 9 columns
        rowOutput += "K" + col + "R" + row + " "; // Append each cell to the row output
    }
    
    printOut(rowOutput.trim()); 
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getGrade(score) {
    let percentage = (score / 236) * 100;
    
    if (percentage >= 89) return 'A';
    else if (percentage >= 77) return 'B';
    else if (percentage >= 65) return 'C';
    else if (percentage >= 53) return 'D';
    else if (percentage >= 41) return 'E';
    else return 'F';}

for (let i = 1; i <= 5; i++) {
    let score = Math.floor(Math.random() * 236) + 1;
    let grade = getGrade(score);
    let percent = ((score / 236) * 100).toFixed(2);
    printOut("student: " + score + " Grade " + grade + " - Percentage: " + percent + "%");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

let rolls = 0;
let foundFullStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;
let yahtzeeRolls;
let fullStraightRolls;
let threePairsRolls;
let towerRolls;
let yahtzeethrows = 0;
let fullStraightthrows = 0;
let threePairsthrows = 0;
let towerthrows = 0;

while (!foundFullStraight || !foundThreePairs || !foundTower || !foundYahtzee) {
    let diceRolls = [rollDie(), rollDie(), rollDie(), rollDie(), rollDie(), rollDie()];
    rolls++;

    let counts = [0, 0, 0, 0, 0, 0];
    diceRolls.forEach(die => counts[die - 1]++);

    if (!foundYahtzee && counts.includes(6)) {
        foundYahtzee = true;
        yahtzeeRolls = diceRolls;
        yahtzeethrows = rolls;
    }

    if (!foundThreePairs && counts.filter(count => count === 2).length === 3) {
        foundThreePairs = true;
        threePairsRolls = diceRolls;
        threePairsthrows = rolls;
    }

    if (!foundTower && counts.includes(4) && counts.includes(2)) {
        foundTower = true;
        towerRolls = diceRolls;
        towerthrows = rolls;
    }

    if (!foundFullStraight && counts.every(count => count === 1)) {
        foundFullStraight = true;
        fullStraightRolls = diceRolls;
        fullStraightthrows = rolls;
    }
}

printOut("you got " + threePairsRolls);
printOut("It took " + threePairsthrows + " rolls to get three pairs.");
printOut(newLine);
printOut("you got " + towerRolls);
printOut("It took " + towerthrows + " rolls to get a tower.");
printOut(newLine);
printOut("you got " + fullStraightRolls);
printOut("It took " + fullStraightthrows + " rolls to get a full straight.");
printOut(newLine);
printOut("you got " + yahtzeeRolls);
printOut("It took " + yahtzeethrows + " rolls to get a yahtzee.");
printOut(newLine);


printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut("Replace this with you answer!");
printOut(newLine);
