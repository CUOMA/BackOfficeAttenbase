import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesFacade } from './dashboard-categories.facade';
import { Router } from '@angular/router';

@Component({
  selector: 'bdc-bo-dashboard-categories',
  templateUrl: './dashboard-categories.component.html',
  styleUrls: ['./dashboard-categories.component.scss'],
})
export class DashboardCategoriesComponent implements OnInit {
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  protected showFirstLastButtons: boolean = true;
  protected openMenu: boolean = false;
  protected areCategoriesLoading$!: Observable<any>;
  protected categories$ = this.categoriesFacade.selectCategories();
  private destroy$ = new Subject<void>();
  dataSource = new MatTableDataSource();

  constructor(private categoriesFacade: CategoriesFacade, private router: Router) {}

  ngOnInit(): void {
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
    this.areCategoriesLoading$.subscribe();
    this.categoriesFacade.dispatchGetCategories(1);
  }
  protected handlePageChanged(pageEvent: any): void {
    this.categoriesFacade.dispatchGetCategories(pageEvent.pageIndex + 1);
  }

  protected handleSearch(query: string) {
    this.categoriesFacade.dispatchGetCategoriesSearch(query);
  }
}
