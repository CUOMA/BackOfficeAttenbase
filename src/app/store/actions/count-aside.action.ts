import { createActionGroup, props } from '@ngrx/store';

export const countAsideApiActions = createActionGroup({
  source: 'Count Aside API',
  events: {
    'Get Count Aside Request': props,
    'Get Count Aside Success': props<any>(),
    'Get Count Aside Failure': props<any>(),
  },
});
