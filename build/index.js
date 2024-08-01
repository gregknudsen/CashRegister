"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const figlet_1 = __importDefault(require("figlet"));
const chalk_1 = __importDefault(require("chalk"));
const ChangeParser_1 = require("./ChangeParser");
const CsvFileReader_1 = require("./CsvFileReader");
const init = () => {
    intro();
};
const intro = () => {
    console.log(chalk_1.default.blue("Welcome to...."));
    setTimeout(() => {
        (0, figlet_1.default)("Cash Register!", (err, data) => {
            if (err) {
                console.log("Sorry, something went wrong");
                console.dir(err);
                return;
            }
            console.log(chalk_1.default.red(data));
            setTimeout(dialog, 2000);
        });
    }, 2000);
};
const dialog = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question("Assuming you have a .csv file ready, are you ready to make change? [Y, n] ", answer => {
        if (answer.toLocaleLowerCase() === "y") {
            console.log("LET'S MAKE CHANGE!");
            console.log(chalk_1.default.blue("-----------------------------------"));
            parseData();
        }
        else {
            console.log(chalk_1.default.red("See you next time!"));
        }
        rl.close();
    });
};
init();
const parseData = () => {
    const csvReader = new CsvFileReader_1.CsvFileReader("sample.csv");
    csvReader.read();
    csvReader.data.forEach((el) => {
        let amountOwed = Number(el[0]);
        let amountGiven = Number(el[1]);
        const changeParser = new ChangeParser_1.ChangeParser(amountOwed, amountGiven);
        //  console.log(changeParser.difference);
        changeParser.provideChange();
        changeParser.summary();
    });
};
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
