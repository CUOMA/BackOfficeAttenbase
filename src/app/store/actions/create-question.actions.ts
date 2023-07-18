import { createActionGroup, props } from '@ngrx/store';

export const createQuestionActions = createActionGroup({
  source: 'Create Question',
  events: {
    'create Metadata': props<any>(),
    'create Content': props<any>(),
    'create Date': props<any>(),
  },
});
