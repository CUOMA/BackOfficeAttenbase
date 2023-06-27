import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
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
import { finalize, takeUntil } from 'rxjs/operators';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';
import { QuestionStatus } from '../../../../../core/models/statuses-response';
import { AlertService } from '../../../../../core/services/alert.service';
import { SynonymousFacade } from '../dashboard-synonymous.facade';

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
    public synonymousFacade: SynonymousFacade,
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
    this.areSynonymsLoading$ = this.synonymousFacade.areSynonymsLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngAfterViewInit(): void {
    this.paginator.pageSize = this.pageSize;
    this.paginator.length = this.synonyms.data.total;
    this.cdr.detectChanges();
  }

  protected deleteSynonymous(id: number, element: string) {
    this.synonymousFacade.dispatchDeleteSynonymous(id);
    this.synonymousFacade
      .isSynonymousUpdated()
      .pipe(finalize(() => this.paginator.firstPage()))
      .subscribe({
        complete: () => {
          this.alertSynonymsDeleted(element);
        },
        error: (error: any) => {
          const isError = error.error.error;
          this.alertService.openFromComponent({
            duration: 5000,
            data: {
              templateHTML: `${isError}`,
            },
          });
        },
      });
  }

  protected editSynonyms(id: number): any {
    this.router.navigate(['/dashboard/sinonimos/editar-sinonimo'], { queryParams: { id } });
  }
  protected handlePageChanged(pageEvent: PageEvent): void {
    this.pageChanged.emit(pageEvent);
  }
  private alertSynonymsDeleted(element: string) {
    this.alertService.openFromComponent({
      duration: 5000,
      data: {
        templateHTML: ` Eliminaste ${element}`,
      },
    });
  }
}
