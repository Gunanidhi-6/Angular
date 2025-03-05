import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCasePipe } from "./title-case.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TitleCasePipe], // Import CommonModule if using standalone components
  template: `<div *ngIf="showContent"><h1>ngIf Example</h1> Content goes here...</div> 
  <div>
    <h1>ngFor Example</h1>
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <div>
  <h1>ngClass Example</h1>
  <button (click)="isActive = !isActive">Toggle Class</button>
  <div [ngClass]="{'active-class': isActive, 'inactive-class': !isActive}">
    This div's class changes dynamically.
  </div>
</div>
<div>
  <h1>Custom Directive Example</h1>
  <p appHoverHighlight>Hover over this text to change its background color.</p>
</div>
<div>
  <h1>Custom Auto Focus Directive</h1>
  <input type="text" appAutoFocus placeholder="This input will be auto-focused">
</div>
<div>
  <h1>Using DatePipe</h1>
  <p>The current date is: {{ currentDate | date: 'fullDate' }}</p>
  <p>Formatted date: {{ currentDate | date: 'shortDate' }}</p>
</div>
<div>
  <h1>Using CurrencyPipe</h1>
  <p>Price in USD: {{ price | currency:'USD':true:'1.2-2' }}</p>
</div>
<div>
  <h1>Using UpperCasePipe and LowerCasePipe</h1>
  <p>Original: {{ message }}</p>
  <p>Uppercase: {{ message | uppercase }}</p>
  <p>Lowercase: {{ message | lowercase }}</p>
</div>
<div>
  <h1>Using Custom TitleCasePipe</h1>
  <p>Original Text: {{ text }}</p>
  <p>Title Case: {{ text | titleCase }}</p>
</div>
<div>
  <h1>Chaining Pipes</h1>

  <!-- Chaining UpperCasePipe and TitleCasePipe -->
  <p>Chained Pipe Result: {{ message2 | lowercase | titleCase }}</p>

  <!-- Chaining CurrencyPipe and DecimalPipe -->
  <p>Chained Currency Pipe: {{ price2 | currency:'USD':true:'1.0-2' | uppercase }}</p>
</div>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showContent: boolean = true;
  items = ['Apple', 'Banana', 'Cherry', 'Date'];
  isActive = true;
  currentDate = new Date();
  price = 12345.6789;
  message = 'Hello Angular';
  text = 'hello angular world';
  message2 = 'hello angular world  from chaining pipes';
  price2 = 10045.6789;

  destroyDirective() {
    alert('Directive will be destroyed.');
    // Logic for destroying the directive can be handled here
  }

}

