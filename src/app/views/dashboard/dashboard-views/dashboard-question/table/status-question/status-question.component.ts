import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionStatus } from '../../../../../../core/models/statuses-response';

@Component({
  selector: 'bdc-bo-status-question',
  templateUrl: './status-question.component.html',
  styleUrls: ['./status-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusQuestionComponent {
  @Input() class!: string;
  @Input() name!: string;
}
