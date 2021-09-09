import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { NumberButtonComponent } from './number-button/number-button.component';
import { OperatorButtonComponent } from './operator-button/operator-button.component';
import { PeriodButtonComponent } from './period-button/period-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    NumberButtonComponent,
    OperatorButtonComponent,
    PeriodButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
