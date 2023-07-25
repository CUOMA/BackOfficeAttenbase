import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionsFacade } from './dashboard-question.facade';
import { TableQuestionComponent } from './table/table-question.component';
import { DashboardCreateQuestionFacade } from './create-question/dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent implements OnInit {
  protected questions$ = this.questionsFacade.selectQuestions();
  protected areQuestionsLoading$!: Observable<boolean>;
  protected areStatusesLoading$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  constructor(
    private questionsFacade: QuestionsFacade,
    private createQuestionFacade: DashboardCreateQuestionFacade
  ) {}

  ngOnInit(): void {
    this.questionsFacade.dispatchGetStatuses();
    this.questionsFacade.dispatchGetQuestions('published', 1);
    this.createQuestionFacade.dispatchGetListCategories();
    this.areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  protected handlePageChanged(pageEvent: any): void {
    this.questionsFacade.dispatchGetQuestions('published', pageEvent.pageIndex + 1);
  }

  protected handleSearch(query: string): void {
    this.questionsFacade.dispatchGetQuestionsSearch(query);
  }
}
