import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Angular Material Card</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Material Design components in Angular.</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button color="primary">Learn More</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    mat-card { max-width: 400px; margin: 20px auto; padding: 16px; }
  `]
})
export class CardComponent {}
