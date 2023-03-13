import { createActionGroup, props } from '@ngrx/store';
import { Questions } from '../../core/models/questions-response';

export const questionsApiActions = createActionGroup({
  source: 'Questions API',
  events: {
    'Get Questions Request': props<{ pageNumber: number }>(),
    'Get Questions Success': props<Questions>(),
    'Get Questions Failure': props<any>(),
    'Delete Question Request': props<{ id: string }>(),
    'Delete Question Success': props<any>(),
    'Delete Question Failure': props<any>(),
  },
});
