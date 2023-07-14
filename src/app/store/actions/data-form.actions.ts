import { createActionGroup, props } from '@ngrx/store';

export const dataFormApiActions = createActionGroup({
  source: 'Data Form API',
  events: {
    dataFormRequest: props<any>(),
  },
});
