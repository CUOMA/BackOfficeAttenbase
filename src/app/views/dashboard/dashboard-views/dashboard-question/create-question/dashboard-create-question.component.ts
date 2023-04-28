import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { DashboardCreateQuestionFacade } from './dashboard-create-question.facade';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  providers: [DashboardCreateQuestionFacade],
  selector: 'bdc-bo-dashboard-create-question',
  templateUrl: './dashboard-create-question.component.html',
  styleUrls: ['./dashboard-create-question.component.scss'],
})
export class DashboardCreateQuestionComponent implements OnInit {
  protected title$!: Observable<string>;
  constructor(private createQuestionFacade: DashboardCreateQuestionFacade) {}

  ngOnInit(): void {
    this.title$ = this.createQuestionFacade.titleQuestion;
  }
}
