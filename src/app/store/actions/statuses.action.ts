import { createActionGroup, props } from '@ngrx/store';
import { QuestionStatus } from '../../core/models/statuses-response';

export const statusesApiActions = createActionGroup({
  source: 'Statuses API',
  events: {
    'Get Statuses Request': props,
    'Get Statuses Success': props<any>(),
    'Get Statuses Failure': props<any>(),
  },
});
