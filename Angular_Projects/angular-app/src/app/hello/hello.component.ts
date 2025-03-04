import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',  
  templateUrl: './hello.component.html',  
  styleUrls: ['./hello.component.css']   
})
export class HelloComponent {
  message: string = 'Hello, Angular!';  

  changeMessage() {
    this.message = 'Message Changed!';
  }
}
