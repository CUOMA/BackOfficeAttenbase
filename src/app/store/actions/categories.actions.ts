import { createActionGroup, props } from '@ngrx/store';

export const categoriesApiActions = createActionGroup({
  source: 'Categories API',
  events: {
    'Get Categories Request': props<any>,
    'Get Categories Success': props<any>(),
    'Get Categories Failure': props<any>(),
  },
});
