import { Component } from '@angular/core';
import { ModalComponent } from './modal/modal.component'; // Import ModalComponent

@Component({
  selector: 'app-root',
  standalone: true, // Marks it as a standalone component
  imports: [ModalComponent], // Import ModalComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
