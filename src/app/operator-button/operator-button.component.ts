import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.scss']
})
export class OperatorButtonComponent implements OnInit {

  @Input() buttonValue: string = "UwU";
  @Output() emitter =  new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  giveOperator() {
    this.emitter.emit(this.buttonValue);
  }
}
