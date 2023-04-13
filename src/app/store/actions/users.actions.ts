import { createActionGroup, props } from '@ngrx/store';

export const usersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Get Users Request': props,
    'Get Users Success': props<any>(),
    'Get Users Failure': props<any>(),
  },
});
