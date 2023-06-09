import { Component, OnInit, inject } from '@angular/core';
import { DashboardCreateQuestionFacade } from '../dashboard-create-question.facade';

@Component({
  selector: 'bdc-bo-question-summary',
  templateUrl: './question-summary.component.html',
  styleUrls: ['./question-summary.component.scss'],
})
export class QuestionSummaryComponent implements OnInit {
  protected preview!: any;
  protected questionFacade = inject(DashboardCreateQuestionFacade);

  ngOnInit(): void {
    this.preview = this.questionFacade.formQuestion;
    console.log(this.questionFacade.formQuestion);
  }
}
