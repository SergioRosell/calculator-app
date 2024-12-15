import { evaluate } from 'mathjs';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-calculator.component.html',
  styleUrl: './main-calculator.component.scss'
})
export class MainCalculatorComponent {

   calculatorInput:string = '0';

  appendToDisplay(symbol:string):void{
    if (this.calculatorInput === '0') {
      this.calculatorInput = symbol;
    } else {
      this.calculatorInput += symbol;
    }
  }

  calculation(){
    try {
      this.calculatorInput = evaluate(this.calculatorInput).toString();
    } catch (error) {
      this.calculatorInput = "Error";
    }
  }

  deleteDisplay(){
    if (this.calculatorInput.length === 1) {
      this.calculatorInput = '0';
    } else {
      this.calculatorInput = this.calculatorInput.slice(0,-1);
    }
  }

}
