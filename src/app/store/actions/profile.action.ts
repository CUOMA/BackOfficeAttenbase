import { createActionGroup, props } from '@ngrx/store';

export const profileApiActions = createActionGroup({
  source: 'Profile API',
  events: {
    'Get Profile Request': props,
    'Get Profile Success': props<any>(),
    'Get Profile Failure': props<any>(),
  },
});
