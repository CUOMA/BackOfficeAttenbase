import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
import { EventEmitter } from '@angular/core';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';

@Component({
  selector: 'bdc-bo-tabla-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.scss'],
})
export class TableCategoriesComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() categories!: any;
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  // paginador
  @Output() pageChanged = new EventEmitter<PageEvent>();
  protected emptyStateData: emptyStateModel = {
    src: '/assets/svg/empty-state/empty-state-categories.svg',
    title: 'Crea una nueva categoria',
    paragraph: 'Las categorías ayudarán a organizar el contenido en tu plataforma.',
  };
  protected showFirstLastButtons: boolean = true;
  protected disabled = false;
  protected pageIndex = 0;
  protected pageSize = 10;
  // paginador
  protected areCategoriesLoading$!: Observable<any>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  protected questionStatusTypes$!: Observable<QuestionStatus>;
  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  protected dataSource!: MatTableDataSource<any>;
  constructor(
    public categoriesFacade: CategoriesFacade,
    private cdr: ChangeDetectorRef,
    public store: Store,
    public router: Router,
    public alertService: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categories'].currentValue) {
      this.dataSource = new MatTableDataSource(this.categories.data);
    }
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.pageSize;
    this.paginator.length = this.categories.total;
    this.cdr.detectChanges();
  }

  ngOnInit(): void {
    this.areCategoriesLoading$ = this.categoriesFacade.areCategoriesLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  protected deleteCategory(id: number, element: string) {
    this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
    this.alertCategoryDeleted(element);
  }

  protected detailCategory(id: number): any {
    this.router.navigate(['/dashboard/categorias/detalle'], { queryParams: { id } });
  }

  protected handlePageChanged(pageEvent: PageEvent): void {
    this.pageChanged.emit(pageEvent);
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
