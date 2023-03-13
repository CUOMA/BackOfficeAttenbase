import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionStatus } from '../../../../../../core/models/statuses-response';
import { Store } from '@ngrx/store';
import { questionsApiActions } from '../../../../../../store/actions/question.action';

@Component({
  selector: 'bdc-bo-menu-question',
  templateUrl: './menu-question.component.html',
  styleUrls: ['./menu-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuQuestionComponent {
  @Input() statusQuestion!: string;
  @Input() idQuestion!: string;
  constructor(public store: Store) {}
  protected deleteQuestion(idQuestion: any): void {
    this.store.dispatch(questionsApiActions.deleteQuestionRequest({ id: idQuestion }));
    console.log(idQuestion);
  }
}
