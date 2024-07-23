"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const csvReader = new CsvFileReader_1.CsvFileReader("sample.csv");
csvReader.read();
// let results = csvReader.read()
csvReader.data.forEach((el) => {
    let amountOwed = Number(Number(el[0]).toFixed(2));
    let amountGiven = Number(Number(el[1]).toFixed(2));
    let difference = Number(Number(amountGiven - amountOwed)).toFixed(2);
    console.log(`amountOwed: ${amountOwed}, Amount given: ${amountGiven}`);
    console.log("difference", Number(difference));
});
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
