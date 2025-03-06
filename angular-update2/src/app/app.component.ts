import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AuthService } from './authservice.service';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { FormComponent } from './form/form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserListComponent, RouterModule, UserFormComponent, FormComponent, MatButtonModule, MatDialogModule, CardComponent], // Import required standalone components
  template: `<h1>Welcome to Angular</h1>
             <app-user-list></app-user-list>
             
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Angular Routing</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" routerLink="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container mt-4">
      <router-outlet></router-outlet>
    </div>
    <app-user-form></app-user-form>
    <app-form></app-form>
    <h1>Angular Material Standalone</h1>
    <app-card></app-card>
    <button mat-raised-button color="accent" (click)="openDialog()">Open Dialog</button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-update2';
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
