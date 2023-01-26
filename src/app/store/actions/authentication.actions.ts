import { createActionGroup, props } from '@ngrx/store';

export const authApiActions = createActionGroup({
  source: 'Auth API',
  events: {
    'Login Request': props<{ email: string; password: string }>(),
    'Login Success': props<any>(),
    'Login Failure': props<{ error: string }>(),
    Logout: props<any>(),
  },
});
