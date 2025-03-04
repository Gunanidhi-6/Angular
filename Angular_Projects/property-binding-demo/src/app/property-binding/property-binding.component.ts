import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  isDisabled: boolean = true;
  buttonText: string = "Click Me!";
  googleUrl: string = "https://www.google.com";
}
