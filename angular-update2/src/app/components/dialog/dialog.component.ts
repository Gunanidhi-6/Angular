import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule],
  template: `<h2 mat-dialog-title>Welcome</h2>
             <mat-dialog-content>This is a Material Dialog!</mat-dialog-content>
             <mat-dialog-actions>
               <button mat-button mat-dialog-close>Close</button>
             </mat-dialog-actions>`,
})
export class DialogComponent {}
