import { Component, OnInit } from '@angular/core';
import { QuestionFacade } from './dashboard-question.facade';
import { QuestionService } from '../../../../core/services/question.service';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent implements OnInit {
  constructor(public questionFacade: QuestionFacade, public questionService: QuestionService) {}
  protected tabs = [
    { label: 'Publicadas', value: 'aprobada' },
    { label: 'Archivadas', value: 'archivada' },
    { label: 'Borradores', value: 'borrador' },
  ];
  ngOnInit(): void {
    this.questionService.getQuestion().subscribe();
  }
  protected selectedTab = this.tabs[0];
  protected questions = this.questionFacade.getQuestions(this.selectedTab.value);

  protected selectTab(tab: { label: string; value: string }) {
    this.selectedTab = tab;
    this.questions = this.questionFacade.getQuestions(tab.value);
  }
}
