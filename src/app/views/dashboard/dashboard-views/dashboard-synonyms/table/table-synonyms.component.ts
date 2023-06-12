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
  EventEmitter,
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
import { SynonymsFacade } from '../dashboard-synonyms.facade';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';

@Component({
  selector: 'bdc-bo-tabla-synonyms',
  templateUrl: './table-synonyms.component.html',
  styleUrls: ['./table-synonyms.component.scss'],
})
export class TableSynonymsComponent implements OnChanges, OnInit, AfterViewInit {
  @Input() synonyms!: any;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  protected emptyStateData: emptyStateModel = {
    src: '/assets/svg/empty-state/empty-state-synonym.svg',
    title: 'Agregá un nuevo sinónimo',
    paragraph: 'Los sinónimos ayudan a encontrar palabras específicas desde el motor de búsqueda.',
  };
  protected displayedColumns: string[] = ['position', 'name', 'seeMore'];
  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected areSynonymsLoading$!: Observable<any>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  protected questionStatusTypes$!: Observable<QuestionStatus>;
  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  protected dataSource!: MatTableDataSource<any>;

  constructor(
    public synonymsFacade: SynonymsFacade,
    private cdr: ChangeDetectorRef,
    public store: Store,
    public router: Router,
    public alertService: AlertService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['synonyms'].currentValue) {
      this.dataSource = new MatTableDataSource(this.synonyms.data.data);
    }
  }

  ngOnInit(): void {
    this.areSynonymsLoading$ = this.synonymsFacade.areSynonymsLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.pageSize;
    this.paginator.length = this.synonyms.data.total;
    this.cdr.detectChanges();
  }

  protected deleteSynonyms(id: number, element: string) {
    this.store.dispatch(categoriesApiActions.deleteCategoriesRequest({ id }));
    this.alertCategoryDeleted(element);
  }

  protected editSynonyms(id: number): any {
    this.router.navigate(['/dashboard/sinonimos/editar-sinonimo'], { queryParams: { id } });
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
