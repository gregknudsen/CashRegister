import * as readline from "readline";
import figlet from "figlet";
import chalk from "chalk";
import { ChangeParser } from "./ChangeParser";
import { CsvFileReader } from "./CsvFileReader";

// Starts app
const init = (): void => {
  console.clear();
  intro();
};

const intro = (): void => {
  console.log(chalk.blue("Welcome to...."));

  setTimeout(() => {
    figlet("Cash Register!", (err, data) => {
      if (err) {
        console.log("Sorry, something went wrong");
        console.dir(err);
        return;
      }
      console.log(chalk.red(data));
      setTimeout(dialog, 2000);
    });
  }, 2000);
};

const dialog = (): void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    "Assuming you have a .csv file ready, are you ready to make change? [Y, n] \n",
    (answer) => {
      if (answer.toLocaleLowerCase() === "y") {
        console.log("LET'S MAKE CHANGE!");
        console.log(chalk.blue("-----------------------------------"));
        parseData();
        console.log(chalk.yellow("Thanks for playing!\n"));
      } else {
        console.log(chalk.red("See you next time!"));
      }

      rl.close();
    }
  );
};

const parseData = (): void => {
  const csvReader = new CsvFileReader("sample.csv");
  csvReader.read();

  csvReader.data.forEach((el: string[]) => {
    let amountOwed = Number(el[0]);
    let amountGiven = Number(el[1]);

    const changeParser = new ChangeParser(amountOwed, amountGiven);
    changeParser.provideChange();
    changeParser.summary();
  });
};

init();