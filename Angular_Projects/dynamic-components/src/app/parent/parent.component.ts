import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, FormsModule], // ✅ Import FormsModule
  template: `
    <input type="text" [(ngModel)]="parentData" placeholder="Enter data" />
    <app-child [data]="parentData"></app-child>
  `,
})
export class ParentComponent {
  parentData: string = '';
}
