import {
  AfterViewInit,
  ChangeDetectionStrategy,
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
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionStatus } from '../../../../../core/models/statuses-response';
import { QuestionsFacade } from '../dashboard-question.facade';

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
