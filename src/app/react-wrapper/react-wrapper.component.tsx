import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import * as React from 'react';
import ReactDOM from 'react-dom';

import ReactComponent from '../react-component/ReactComponent'

@Component({
  selector: 'app-react-wrapper',
  templateUrl: './react-wrapper.component.html',
  styleUrls: ['./react-wrapper.component.scss']
})
export class ReactWrapperComponent implements OnChanges, AfterViewInit {
  containerElementName: string = "reactcontainer";

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  private render() {
    ReactDOM.render(
    <ReactComponent/>,
    document.getElementById(this.containerElementName));
  }
}
