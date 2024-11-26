import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCalculatorComponent } from './main-calculator/main-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator-app';
}
