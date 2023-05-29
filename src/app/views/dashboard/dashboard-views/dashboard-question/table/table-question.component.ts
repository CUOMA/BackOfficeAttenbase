import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  OnInit,
  Output,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Questions, Datum } from '../../../../../core/models/questions-response';
import { QuestionsFacade } from '../dashboard-question.facade';
import { EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { QuestionStatus } from '../../../../../core/models/statuses-response';
import { emptyStateModel } from 'src/app/shared/empty-state/empty-state.component';

@Component({
  selector: 'bdc-bo-tabla-question',
  templateUrl: './table-question.component.html',
  styleUrls: ['./table-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableQuestionComponent implements OnInit, AfterViewInit, OnChanges {
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @Input() questions!: any;
  @Input() page?: number;
  protected displayedColumns: string[] = [
    'question',
    'category',
    'subcategory',
    'lastupdate',
    'state',
    'seeMore',
  ];
  protected emptyStateData: emptyStateModel = {
    src: '/assets/svg/empty-state/empty-state-questions.svg',
    title: 'Crea una nueva pregunta',
    paragraph: 'Podrás editar su contenido, programarlas o publicarlas en tu plataforma.',
  };

  protected showFirstLastButtons: boolean = true;
  protected disabled: boolean = false;
  protected pageIndex: number = 0;
  protected pageSize: number = 10;
  protected areQuestionsLoading$!: Observable<boolean>;
  protected color: ThemePalette = 'primary';
  protected mode: MatProgressSpinnerModule = 'indeterminate';
  protected questionStatusTypes$!: Observable<QuestionStatus>;

  private destroy$ = new Subject<void>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  constructor(public questionsFacade: QuestionsFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions'].currentValue) {
      this.dataSource = new MatTableDataSource(this.questions);
    }
    this.paginator?.firstPage();
  }
  ngOnInit(): void {
    this.areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  ngAfterViewInit() {
    this.paginator.pageSize = this.pageSize;
    this.paginator.length = this.questions[1].total;
  }

  protected handlePageChanged(pageEvent: PageEvent): void {
    this.pageChanged.emit(pageEvent);
  }
}
