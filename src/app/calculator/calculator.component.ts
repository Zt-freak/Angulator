import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  displayedNumber: string = "";
  howBlurry: number = 0;
  equation: string = "";
  operator: string = "";
  answers: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) { 
    if (!isNaN(Number(event.key))) {
      this.onNumberClicked(Number(event.key));
    }
    if (event.key === ".") {
      this.onPeriodClicked(event.key)
    }
    if (
      event.key === "+" ||
      event.key === "-" ||
      event.key === "*" ||
      event.key === "/"
    ) {
      this.onOperatorClicked(event.key);
    }
    if (event.key === "Enter") {
      event.preventDefault();
      this.onEqualsClicked();
    }
    if (event.key === "Backspace") {
      this.onBackClicked();
    }
  }

  onNumberClicked(numberValue: number) {
    const numberString: string = numberValue.toString();

    if (this.displayedNumber === "0") {
      this.displayedNumber = numberString;
      return;
    }
    this.displayedNumber = this.displayedNumber + numberString;
  }

  onPeriodClicked(periodValue: string) {
    if (this.displayedNumber.includes(".")) {
      return;
    }
    if (this.displayedNumber === "") {
      this.displayedNumber = "0" + periodValue;
    }
    else {
      this.displayedNumber = this.displayedNumber + periodValue;
    }
  }

  onOperatorClicked(operatorValue: string) {
    if (operatorValue === "-" && this.displayedNumber === "") {
      this.displayedNumber = "-";
      return;
    }
    if (this.operator !== "" && this.displayedNumber !== "") {
      this.onEqualsClicked();
    }
    this.operator = operatorValue;
    this.equation = `${this.displayedNumber} ${operatorValue}`;
    this.displayedNumber = "";
  }

  onEqualsClicked() {
    if (this.displayedNumber == "420") {
      this.howBlurry += 1;
      document.body.style.filter = `blur(${this.howBlurry}px)`
    }
    
    if (this.operator === "")
      return;
    this.equation = `${this.equation} ${this.displayedNumber}`;
    this.operator = "";
    this.displayedNumber = eval(this.equation).toString();
    
    if (this.displayedNumber == "Infinity" || this.displayedNumber == "NaN") {
      console.error("foutmelding")
      window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }
    this.answers.unshift(this.displayedNumber);
    this.equation = "";
  }

  onBackClicked() {
    this.displayedNumber = this.displayedNumber.slice(0, -1)
  }

  onHistoryClicked(event: any) {
    this.displayedNumber = event.target.value;
  }
}
