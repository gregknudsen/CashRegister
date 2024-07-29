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

  provideChange(): void {
    
    if ((this.owed * 100) % 3 === 0) {
      let shuffled = usd.USD
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        this.makeChange(shuffled)

      } else this.makeChange(usd.USD);

  }
  makeChange(array: Change[]): void {
    let changeInCents: number = Number(Number(this.difference).toFixed(2)) * 100;
    array.forEach((el) => {
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
}