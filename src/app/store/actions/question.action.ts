import { createActionGroup, props } from '@ngrx/store';
import { Questions } from '../../core/models/questions-response';
import { PageEvent } from '@angular/material/paginator';

export const questionsApiActions = createActionGroup({
  source: 'Questions API',
  events: {
    'Get Questions Request': props<{ pageNumber: number }>(),
    'Get Questions Success': props<Questions>(),
    'Get Questions Failure': props<any>(),
  },
});
