import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  OnInit,
  Output,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Questions, Datum } from '../../../../../core/models/questions-response';
import { QuestionsFacade } from '../dashboard-question.facade';
import { EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionStatus } from '../../../../../core/models/statuses-response';

@Component({
  selector: 'bdc-bo-tabla-question',
  templateUrl: './table-question.component.html',
  styleUrls: ['./table-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableQuestionComponent implements OnInit, AfterViewInit {
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @Input() questions!: Datum[];
  protected displayedColumns: string[] = [
    'question',
    'category',
    'subcategory',
    'lastupdate',
    'state',
    'seeMore',
  ];

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

  ngOnInit(): void {
    this.areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading.pipe(
      takeUntil(this.destroy$)
    );
    this.dataSource = new MatTableDataSource(this.questions);
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.paginator.pageSize = this.pageSize;
    this.paginator.length = this.questions.length;
  }

  protected handlePageChanged(pageEvent: PageEvent): void {
    this.pageChanged.emit(pageEvent);
  }
}
