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
// Starts app
const init = () => {
    console.clear();
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
        output: process.stdout,
    });
    rl.question("Assuming you have a .csv file ready, are you ready to make change? [Y, n] \n", (answer) => {
        if (answer.toLocaleLowerCase() === "y") {
            console.log("LET'S MAKE CHANGE!");
            console.log(chalk_1.default.blue("-----------------------------------"));
            parseData();
            console.log(chalk_1.default.yellow("Thanks for playing!\n"));
        }
        else {
            console.log(chalk_1.default.red("See you next time!"));
        }
        rl.close();
    });
};
const parseData = () => {
    const csvReader = new CsvFileReader_1.CsvFileReader("sample.csv");
    csvReader.read();
    csvReader.data.forEach((el) => {
        let amountOwed = Number(el[0]);
        let amountGiven = Number(el[1]);
        const changeParser = new ChangeParser_1.ChangeParser(amountOwed, amountGiven);
        changeParser.provideChange();
        changeParser.summary();
    });
};
init();
