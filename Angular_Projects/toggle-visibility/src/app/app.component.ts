import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';  // Import NgClass and NgIf

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this as a standalone component
  imports: [NgClass, NgIf],  // Import NgClass and NgIf
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;  // Controls visibility
  isHighlighted = false;  // Controls CSS class

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
