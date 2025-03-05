import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  imports: [ChildComponent],
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "Hello from Parent!";
  receivedMessage = '';

  // This method will handle the event emitted from the child
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
