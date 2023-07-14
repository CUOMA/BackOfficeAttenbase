import { createActionGroup, props } from '@ngrx/store';

export const synonymsApiActions = createActionGroup({
  source: 'Synonyms API',
  events: {
    'Get synonyms Request': props<{ page: number }>(),
    'Get synonyms Success': props<any>(),
    'Get synonyms Failure': props<any>(),

    'Delete synonymous Request': props<{ id: number }>(),
    'Delete synonyms Success': props<any>(),
    'Delete synonyms Failure': props<any>(),
  },
});
