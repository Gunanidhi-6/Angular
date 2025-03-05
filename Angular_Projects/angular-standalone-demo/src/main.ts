import { bootstrapApplication } from '@angular/platform-browser';
import { ItemListComponent } from './app/components/item-list/item-list.component';

bootstrapApplication(ItemListComponent)
  .catch(err => console.error(err));
