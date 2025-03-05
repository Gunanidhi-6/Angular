import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-template',
  templateUrl: './hello-template.component.html',
  styleUrls: ['./hello-template.component.css']
})
export class HelloTemplateComponent {
  message: string = 'Hello, Angular!';

  changeMessage() {
    this.message = 'You clicked the button!';
  }
}
