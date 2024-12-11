"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const numbers = [];
for (let i = 1; i <= 20; i++) {
    numbers.push(i);
}

printOut(numbers.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(numbers.join(" - "));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const text = "Hei på deg, hvordan har du det?";
const words = text.split(" ");

for (let i = 0; i < words.length; i++) {
    printOut(`Word number ${i + 1},  in the index ${i}: ${words[i]}`);
}
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`Element "${element}" removed from the array.`);
    } else {
        printOut(`Element "${element}" not found in the array.`);
    }
}

const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
printOut(names.toString());
removeElement(names, "Liv");
printOut(names.toString());
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = names.concat(boyNames);
allNames.sort();
printOut(allNames.toString());
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

const books = [
    new TBook("Book1", "Per", "123-4758374858"),
    new TBook("Book2", "Jan", "456-2399038407"),
    new TBook("Book3", "Andrine", "789-0123456789")
];

for (const book of books) {
    printOut(book.toString());
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Monday" },
    WeekDay2: { value: 0x02, name: "Tuesday" },
    WeekDay3: { value: 0x04, name: "Wednesday" },
    WeekDay4: { value: 0x08, name: "Thursday" },
    WeekDay5: { value: 0x10, name: "Friday" },
    WeekDay6: { value: 0x20, name: "Saturday" },
    WeekDay7: { value: 0x40, name: "Sunday" },
    Workdays: { value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10, name: "Workdays" },
    Weekend: { value: 0x20 + 0x40, name: "Weekend" },
};

const weekDayKeys = Object.keys(EWeekDays);

for (const key of weekDayKeys) {
    const day = EWeekDays[key];
    printOut(`Key: ${key}, Value: ${day.value}, Name: ${day.name}`);
}
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);

const ascendingNumbers = [...randomNumbers].sort((a, b) => a - b);
const descendingNumbers = [...randomNumbers].sort((a, b) => b - a);

printOut(`Unsorted: ${randomNumbers.toString()}`);
printOut(newLine);
printOut(`Ascending: ${ascendingNumbers.toString()}`);
printOut(newLine);
printOut(`Descending: ${descendingNumbers.toString()}`);
printOut(newLine);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const frequencyMap = randomNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

const frequencyArray = Object.entries(frequencyMap).map(([num, freq]) => ({ num: Number(num), freq }));

frequencyArray.sort((a, b) => b.freq - a.freq || a.num - b.num);

printOut("Number frequencies:");
frequencyArray.forEach(({ num, freq }) => {
    printOut(`Number: ${num}, Frequency: ${freq}`);
});
printOut(newLine);

printOut("Frequencies and corresponding numbers:");
const groupedByFrequency = frequencyArray.reduce((acc, { num, freq }) => {
    if (!acc[freq]) acc[freq] = [];
    acc[freq].push(num);
    return acc;
}, {});

Object.entries(groupedByFrequency).sort((a, b) => b[0] - a[0]).forEach(([freq, nums]) => {
    printOut(`Frequency: ${freq}, Numbers: ${nums.join(", ")}`);
});
printOut(newLine);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const rows = 5;
const columns = 9;
const grid = [];

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const row = [];
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        row.push(`Row ${rowIndex + 1}, Column ${columnIndex + 1}`);
    }
    grid.push(row);
}

for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    let rowString = "";
    for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
        rowString += grid[rowIndex][columnIndex] + "| ";
    }
    printOut(rowString.trim());
    printOut(newLine);
}
printOut(newLine);
