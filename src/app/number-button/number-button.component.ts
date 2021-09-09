import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-button',
  templateUrl: './number-button.component.html',
  styleUrls: ['./number-button.component.scss']
})
export class NumberButtonComponent implements OnInit {

  @Input() buttonValue: number = 0;
  @Output() emitter =  new EventEmitter<number>();
  
  constructor() {}

  ngOnInit(): void {
  }

  giveNumber() {
    this.emitter.emit(this.buttonValue);
  }

}
