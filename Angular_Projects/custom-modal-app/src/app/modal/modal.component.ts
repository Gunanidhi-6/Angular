import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule], // Add CommonModule here
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() title: string = ''; // Modal title
  @Input() isVisible: boolean = false; // Control modal visibility
  @Output() closeModal = new EventEmitter<void>(); // Emit event when modal closes

  close() {
    this.closeModal.emit();
  }
}
