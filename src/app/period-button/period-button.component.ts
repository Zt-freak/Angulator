import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-period-button',
  templateUrl: './period-button.component.html',
  styleUrls: ['./period-button.component.scss']
})
export class PeriodButtonComponent implements OnInit {

  buttonValue: string = ".";
  
  @Output() emitter =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  givePeriod() {
    this.emitter.emit(this.buttonValue);
  }
}
