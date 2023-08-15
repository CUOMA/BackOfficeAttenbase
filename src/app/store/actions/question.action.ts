import { createActionGroup, props } from '@ngrx/store';
import { Questions } from '../../core/models/questions-response';

export const questionsApiActions = createActionGroup({
  source: 'Questions API',
  events: {
    'Get Questions Request': props<{ page: number; status: string }>(),
    'Get Questions Success': props<Questions>(),
    'Get Questions Failure': props<any>(),

    'Delete Question Request': props<{ id: number }>(),
    'Delete Question Success': props<any>(),
    'Delete Question Failure': props<any>(),

    'Search Request': props<{ query: string }>(),
    'Search Success': props<Questions>(),
    'Search Failure': props<any>(),

    'Filter Question Request': props<{
      categories: number[];
      date_from: string;
      date_to: string;
      name: string;
      status: number[];
      subCategories: number[];
    }>(),
    'Filter Question Success': props<Questions>(),
    'Filter Question Failure': props<any>(),
  },
});
