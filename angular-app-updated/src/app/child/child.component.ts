import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childMessage: string = ''; // This will receive data from parent
  @Output() sendMessage: EventEmitter<string> = new EventEmitter(); // Event emitter to send data to paren

  // Method to emit a message to the parent
  sendToParent() {
    this.sendMessage.emit('Hello from Child!');
  }

}
