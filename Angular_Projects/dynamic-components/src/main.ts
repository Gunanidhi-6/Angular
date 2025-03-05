import { bootstrapApplication } from '@angular/platform-browser';
import { ParentComponent } from './app/parent/parent.component';

bootstrapApplication(ParentComponent)
  .catch(err => console.error(err));
