import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  OnInit,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Questions } from '../../../../../core/models/questions-response';
import { EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionStatus } from '../../../../../core/models/statuses-response';
import { CategoriesFacade } from '../dashboard-categories.facade';

@Component({
  selector: 'bdc-bo-tabla-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.scss'],
})
export class TableCategoriesComponent implements OnInit, AfterViewInit {
  @Input() categories!: any;
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected areCategoriesLoading$!: Observable<any>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  protected questionStatusTypes$!: Observable<QuestionStatus>;

  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  protected dataSource!: MatTableDataSource<any>;

  constructor(public categoriesFacade: CategoriesFacade, private cdRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.categories);
    this.dataSource.paginator = this.paginator;
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.pageSize;
  }
  protected deleteCategory(id: number) {
    console.log(id);
  }
}
