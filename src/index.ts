import * as readline from 'readline';
import figlet from "figlet";
import chalk from 'chalk';
import { ChangeParser } from "./ChangeParser";
import { CsvFileReader } from "./CsvFileReader";






const init = (): void => {
  intro();
}

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
      setTimeout(dialog,2000);
    });
  }, 2000)
}
const dialog = ():void => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question("Assuming you have a .csv file ready, are you ready to make change? [Y, n] ", answer => {
    if (answer.toLocaleLowerCase() === "y") {
      console.log("LET'S MAKE CHANGE!");
      console.log(chalk.blue("-----------------------------------"));
      parseData();
    } else {
      console.log(chalk.red("See you next time!"))
    }
    
    rl.close();
  })
  
}


init();

const parseData = (): void => {
  const csvReader = new CsvFileReader("sample.csv")
  csvReader.read();

  csvReader.data.forEach((el: string[]) => {
    let amountOwed = Number(el[0]);
    let amountGiven = Number(el[1]);
    
    const changeParser = new ChangeParser(amountOwed, amountGiven);
    //  console.log(changeParser.difference);
    changeParser.provideChange();
    changeParser.summary();
  });
}


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