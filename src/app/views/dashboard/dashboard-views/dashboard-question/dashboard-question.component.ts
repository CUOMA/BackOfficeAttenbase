import { Component } from '@angular/core';
import { QuestionFacade } from './dashboard-question.facade';

@Component({
  selector: 'bdc-bo-dashboard-question',
  templateUrl: './dashboard-question.component.html',
  styleUrls: ['./dashboard-question.component.scss'],
})
export class DashboardQuestionComponent {
  protected isOpen: boolean = false;
  constructor(public questionFacade: QuestionFacade) {}
  protected tabs = [
    { label: 'Publicadas', value: 'aprobada' },
    { label: 'Archivadas', value: 'archivada' },
    { label: 'Borradores', value: 'borrador' },
  ];
  protected selectedTab = this.tabs[0];
  protected questions = this.questionFacade.getQuestions(this.selectedTab.value);

  protected selectTab(tab: { label: string; value: string }) {
    this.selectedTab = tab;
    this.questions = this.questionFacade.getQuestions(tab.value);
  }
  protected openMenu() {
    this.isOpen = !this.isOpen;
  }
}
