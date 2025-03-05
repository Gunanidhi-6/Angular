import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagination Example';
  itemsPerPage = 5;
  currentPage = 1;
  dataArray = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.dataArray.slice(start, start + this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }

  /** ✅ Returns an array of page numbers */
  getPageNumbers(): number[] {
    const totalPages = Math.ceil(this.dataArray.length / this.itemsPerPage);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
}
