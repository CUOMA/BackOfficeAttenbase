import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionStatus } from '../../../../../core/models/statuses-response';
import { AlertService } from '../../../../../core/services/alert.service';
import { categoriesApiActions } from '../../../../../store/actions/categories.actions';
import { CategoriesFacade } from '../dashboard-categories.facade';

@Component({
  selector: 'bdc-bo-tabla-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.scss'],
})
export class TableCategoriesComponent implements OnChanges, OnInit, AfterViewInit {
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

  constructor(
    public categoriesFacade: CategoriesFacade,
    private cdRef: ChangeDetectorRef,
    public store: Store,
    public router: Router,
    public alertService: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'].currentValue) {
      this.dataSource = new MatTableDataSource(this.categories.data);
    }
  }

  ngOnInit(): void {
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator.pageSize = this.pageSize;
  }

  protected deleteCategory(id: number, element: string) {
    this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
    this.alertCategoryDeleted(element);
  }

  protected detailCategory(id: number): any {
    this.router.navigate(['/dashboard/categorias/detalle'], { queryParams: { id } });
  }

  private alertCategoryDeleted(element: string) {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: `Eliminaste ${element}`,
      },
    });
  }
}
