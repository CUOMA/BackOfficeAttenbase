import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-status-question-button',
  templateUrl: './status-question-button.component.html',
  styleUrls: ['./status-question-button.component.scss'],
})
export class StatusQuestionButtonComponent {
  @Input() class!: string;
  @Input() name!: string;
}
