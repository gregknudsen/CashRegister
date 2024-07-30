"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const figlet_1 = __importDefault(require("figlet"));
const CsvFileReader_1 = require("./CsvFileReader");
const csvReader = new CsvFileReader_1.CsvFileReader("sample.csv");
csvReader.read();
const init = () => {
    intro();
};
const intro = () => {
    console.log("Welcome to....");
    setTimeout(() => {
        (0, figlet_1.default)("Change Parser!", (err, data) => {
            if (err) {
                console.log("Sorry, something went wrong");
                console.dir(err);
                return;
            }
            console.log(data);
        });
    }, 2000);
};
init();
// let results = csvReader.read()
// csvReader.data.forEach((el: string[]) => {
//   let amountOwed = Number(el[0]);
//   let amountGiven = Number(el[1]);
//   const changeParser = new ChangeParser(amountOwed, amountGiven);
//   //  console.log(changeParser.difference);
//   changeParser.provideChange();
//   changeParser.summary();
// });
/*
REQUIREMENTS

Accept a flat file as input
Each line will contain the amount owed and the amount paid separated by a comma (for example: 2.13,3.00)
Expect that there will be multiple lines
Output the change the cashier should return to the customer
The return string should look like: 1 dollar,2 quarters,1 nickel, etc ...
Each new line in the input file should be a new line in the output file

***If the "owed" amount is divisible by 3, the app should randomly generate the change denominations***

*/ 
