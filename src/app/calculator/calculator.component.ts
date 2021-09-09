import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  displayedNumber: string = "";
  equation: string = "";
  operator: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onNumberClicked(numberValue: number) {
    const numberString: string = numberValue.toString();

    if (this.displayedNumber === "0") {
      this.displayedNumber = numberString;
      return
    }
    this.displayedNumber = this.displayedNumber + numberString;
  }

  onPeriodClicked(periodValue: string) {
    if (this.displayedNumber.includes(".")) {
      return
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
    this.equation = `${this.equation} ${this.displayedNumber}`;
    this.operator = "";
    this.displayedNumber = eval(this.equation).toString();
    this.equation = "";
  }

  onBackClicked() {
    this.displayedNumber = this.displayedNumber.slice(0, -1)
  }
}