import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { QuestionsFacade } from './dashboard-question.facade';
import { tap, takeUntil } from 'rxjs/operators';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent implements OnInit {
  constructor(public questionsFacade: QuestionsFacade) {}
  protected tabs = [
    { label: 'Publicadas', value: 'aprobada' },
    { label: 'Archivadas', value: 'archivada' },
    { label: 'Borradores', value: 'borrador' },
  ];
  protected selectedTab = this.tabs[0];
  protected questions$ = this.questionsFacade.selectQuestions();
  // protected questions = this.questionsFacade.getQuestionsa(this.selectedTab.value);
  protected areQuestionsLoading$!: Observable<boolean>;
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.questionsFacade.dispatchGetQuestions();
    this.areQuestionsLoading$ = this.questionsFacade.areQuestionsLoading.pipe(
      takeUntil(this.destroy$)
    );
  }

  protected handlePageChanged(pageEvent: PageEvent): void {
    this.questionsFacade.dispatchGetQuestions(pageEvent.pageIndex + 1);
  }

  protected selectTab(tab: { label: string; value: string }) {
    this.selectedTab = tab;
    // this.questions = this.questionsFacade.getQuestionsa(tab.value);
  }
}
