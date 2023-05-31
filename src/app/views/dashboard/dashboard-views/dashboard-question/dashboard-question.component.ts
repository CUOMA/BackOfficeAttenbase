import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionsFacade } from './dashboard-question.facade';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent implements OnInit {
  constructor(public questionsFacade: QuestionsFacade) {}
  protected tabs = [
    { label: 'Publicadas', value: 'published' },
    { label: 'Archivadas', value: 'archived' },
    { label: 'Borradores', value: 'draft' },
  ];
  protected selectedTab = this.tabs[0];
  protected questions$ = this.questionsFacade.selectQuestions();
  protected areQuestionsLoading$!: Observable<boolean>;
  protected areStatusesLoading$!: Observable<boolean>;
  private destroy$ = new Subject<void>();
  protected isOpen: boolean = false;

  ngOnInit(): void {
    this.questionsFacade.dispatchGetStatuses();
    this.questionsFacade.dispatchGetQuestions('published', 1);
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

  protected selectTab(tab: { label: string; value: string }) {
    this.selectedTab = tab;
    this.questionsFacade.dispatchGetQuestions(this.selectedTab.value);
    this.questions$ = this.questionsFacade.selectQuestions();
  }

  protected toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
