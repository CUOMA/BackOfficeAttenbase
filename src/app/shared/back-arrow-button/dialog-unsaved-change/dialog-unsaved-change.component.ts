import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { createQuestionActions } from 'src/app/store/actions/create-question.actions';

@Component({
  selector: 'bdc-bo-unsaved-changes',
  templateUrl: './dialog-unsaved-change.component.html',
  styleUrls: ['./dialog-unsaved-change.component.scss'],
})
export class DialogUnsavedChangeComponent {
  @Input() url: string = '/..';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {}

  protected deleteLocalStore(): void {
    this.store.dispatch(
      createQuestionActions.createMetadata({
        alias: undefined,
        associatedQuestions: [],
        category: '',
        subcategory: '',
        question: 'Crear Pregunta',
      })
    );
    this.store.dispatch(createQuestionActions.createContent(''));
    this.store.dispatch(createQuestionActions.createDate(''));
  }
}
