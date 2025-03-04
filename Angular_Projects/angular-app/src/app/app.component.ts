import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { HelloTemplateComponent } from './hello-template/hello-template.component';
import { HelloMetadataComponent } from "./metadata/metadata.component";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, HelloComponent, HelloTemplateComponent, HelloMetadataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
}
