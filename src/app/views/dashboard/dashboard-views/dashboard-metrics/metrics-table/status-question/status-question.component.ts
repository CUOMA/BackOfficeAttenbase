import { Component, Input } from '@angular/core';

@Component({
  selector: 'bdc-bo-status-question',
  templateUrl: './status-question.component.html',
  styleUrls: ['./status-question.component.scss'],
})
export class StatusQuestionComponent {
  @Input() name!: any;
  @Input() class!: any;
}
