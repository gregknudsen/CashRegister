import usd from "./config/usd.json";

interface Change { 
    name: string; 
    value: number;
  }


export class ChangeParser {
  result: Change[] = [];
  

  constructor(public owed: number, public given: number) { }

  get difference(): number {
    return Number(Number(this.given - this.owed).toFixed(2));
  }


  get parsedChange(): string {
    let summary = "";
    usd.USD.forEach((d, index) => {
      if (this.result[index].value === 0) {
        summary += ""
      } else if (this.result[index].value === 1) {
          summary += `${this.result[index].value} ${this.result[index].name} `
        } else summary += `${this.result[index].value} ${this.result[index].name}s `        
      })
    

    return summary;
  }

  summary(): void {
    console.log("FINAL RESULT PARSED", this.parsedChange)
  }

  makeChange(): void {
    let changeInCents: number = Number(Number(this.difference).toFixed(2)) * 100;
    

    usd.USD.forEach((el) => {
      if (changeInCents % el.value >= 0) {
        const _temp = changeInCents - (changeInCents % el.value)

        
        this.result.push({
          name: el.name,
          value: _temp / el.value
        })
        changeInCents -= _temp;
      }
    })
  }

  // makeFunkyChange(): void {
  //   let currentChangeValue = 0;

  //   // Random change
  //   if (this.owed % 3 === 0) {
  //     while (currentChangeValue !== this.difference) {
  //       const remainingDifference = this.difference - currentChangeValue;
  //       const availableDenominations = denominations.filter(
  //         (d) => d.value <= remainingDifference
  //       );
  //       const randomDenomination =
  //         availableDenominations[
  //           Math.floor(Math.random() * availableDenominations.length)
  //         ];
  
  //       const currentChangePortion = changePortions.find(
  //         (c) => c.denomination === randomDenomination
  //       );
  
  //       if (currentChangePortion !== undefined) {
  //         currentChangePortion.amount++;
  //       } else {
  //         changePortions.push({ denomination: randomDenomination, amount: 1 });
  //       }
  //       currentChangeValue += randomDenomination.value;
  //     }
  //     changePortions.sort((a, b) => b.denomination.value - a.denomination.value);
  //   }
  // }
}

/*


Convert to number of pennies
let value = Number(Number(change).toFixed(2)) * 100;

if (value % 100 >= 0) {
    const _temp = value - (value % 100);
    result["dollars"] = _temp / 100;
    value -= _temp;
  }


  if (value % 25 >= 0) {
    const _temp = value - (value % 25);
    result["quarters"] = _temp / 25;
    value -= _temp;
  }

  if (value % 10 >= 0) {
    const _temp = value - (value % 10);
    result["dimes"] = _temp / 10;
    value -= _temp;
  }

  if (value % 5 >= 0) {
    const _temp = value - (value % 5);
    result["nickels"] = _temp / 5;
    value -= _temp;
  }

  result["pennies"] = value;
  console.log(result);

*/