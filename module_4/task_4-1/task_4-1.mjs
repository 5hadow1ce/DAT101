"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

const CurrencyTypes = {
    NOK: {value: 1.000, name: "Norsk kroner", denomination: "kr"},
    EUR: {value: 0.0985, name: "Europeiske euro", denomination: "€"},
    USD: {value: 0.1091, name: "United States dollar", denomination: "$"},
    GBP: {value: 0.0847, name: "Pound sterling", denomination: "£"},
    INR: {value: 7.8309, name: "Indiske rupee", denomination: "₹"},
    AUD: {value: 0.1581, name: "Australisk dollar", denomination: "A$"},
    PHP: {value: 6.5189, name: "Filipinske peso", denomination: "₱"},
    SEK: {value: 1.0580, name: "Svenske kroner", denomination: "kr"},
    CAD: {value: 0.1435, name: "Canadiske dollar", denomination: "C$"},
    THB: {value: 3.3289, name: "Thai baht", denomination: "฿"}
};

class TAccount {
    #type;
    #balance;
    #withdrawalCount;
    #currency;

    constructor(type, balance = 0, currency = CurrencyTypes.NOK) {
        this.#type = type;
        this.#balance = balance;
        this.#withdrawalCount = 0;
        this.#currency = currency;
    }

    #convertCurrency(amount, fromCurrency, toCurrency) {
        return (amount / fromCurrency.value) * toCurrency.value;
    }

    toString() {
        return `Account type: ${this.#type}, Currency: ${this.#currency.name}`;
    }

    setType(newType) {
        printOut(`Account type changed from ${this.#type} to ${newType}`);
        this.#type = newType;
        this.#withdrawalCount = 0;
    }

    getType() {
        return this.#type;
    }

    getBalance() {
        return this.#balance.toFixed(2);
    }

    deposit(amount, currency = CurrencyTypes.NOK) {
        const convertedAmount = this.#convertCurrency(amount, currency, this.#currency);
        this.#balance += convertedAmount;
        this.#withdrawalCount = 0;
        printOut(`Deposit of ${amount}${currency.denomination} ${currency.name}, new balance is ${this.#balance.toFixed(2)}${this.#currency.denomination} ${this.#currency.name}`);
    }

    withdraw(amount, currency = CurrencyTypes.NOK) {
        const convertedAmount = this.#convertCurrency(amount, currency, this.#currency);
        switch (this.#type) {
            case accountTypes.sparekonto:
                if (this.#withdrawalCount >= 3) {
                    printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name} failed, withdrawal limit reached`);
                } else if (convertedAmount > this.#balance) {
                    printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name} failed, insufficient funds`);
                } else {
                    this.#balance -= convertedAmount;
                    this.#withdrawalCount++;
                    printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name}, new balance is ${this.#balance.toFixed(2)}${this.#currency.denomination} ${this.#currency.name}`);
                }
                break;
            case accountTypes.pensionskonto:
                printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name} failed, no withdrawals allowed for pensionskonto`);
                break;
            default:
                if (convertedAmount > this.#balance) {
                    printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name} failed, insufficient funds`);
                } else {
                    this.#balance -= convertedAmount;
                    printOut(`Withdrawal of ${amount}${currency.denomination} ${currency.name}, new balance is ${this.#balance.toFixed(2)}${this.#currency.denomination} ${this.#currency.name}`);
                }
                break;
        }
    }

    getCurrencyType() {
        return this.#currency;
    }

    setCurrencyType(newCurrency) {
        if (this.#currency === newCurrency) {
            return;
        }
        if (!Object.values(CurrencyTypes).includes(newCurrency)) {
            printOut(`Currency type change failed, ${newCurrency} is not a valid currency`);
            return;
        }
        if (this.#currency !== CurrencyTypes.NOK) {
            this.#balance = this.#convertCurrency(this.#balance, this.#currency, CurrencyTypes.NOK);
        }
        this.#balance = this.#convertCurrency(this.#balance, CurrencyTypes.NOK, newCurrency);
        printOut(`Currency type changed from ${this.#currency.name} to ${newCurrency.name}, new balance is ${this.#balance.toFixed(2)}${newCurrency.denomination}`);
        this.#currency = newCurrency;
    }
}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const accountTypes = {
    brukskonto: "Brukskonto",
    sparekonto: "Sparekonto",
    kredittkonto: "Kredittkonto",
    pensionskonto: "Pensionskonto"
};

const accountTypesList = Object.values(accountTypes).join(", ");
printOut(accountTypesList);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const myAccount = new TAccount(accountTypes.brukskonto);
printOut(myAccount.toString());
myAccount.setType(accountTypes.sparekonto);
printOut(myAccount.toString());
printOut(newLine);
printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`My account balance is ${myAccount.getBalance()}`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25);
myAccount.withdraw(25);
myAccount.withdraw(25);
myAccount.withdraw(25);
myAccount.withdraw(25);
myAccount.setType(accountTypes.pensionskonto);
myAccount.withdraw(25);
myAccount.setType(accountTypes.sparekonto);
myAccount.withdraw(25);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.EUR);
myAccount.setCurrencyType(CurrencyTypes.NOK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.withdraw(10, CurrencyTypes.USD);
myAccount.withdraw(40, CurrencyTypes.SEK);
myAccount.withdraw(12, CurrencyTypes.NOK);
myAccount.deposit(1, CurrencyTypes.AUD);
myAccount.withdraw(2.0494, CurrencyTypes.USD);
printOut(newLine);
