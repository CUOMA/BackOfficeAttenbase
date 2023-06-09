import { Action, ActionReducer, INIT, MetaReducer } from '@ngrx/store';

export const rehydratation =
  (reducer: ActionReducer<any>): ActionReducer<any> =>
  (state: any, action: Action) => {
    if (action != null && action.type === INIT) {
      const storedState = localStorage.getItem('state');
      if (storedState) {
        try {
          return JSON.parse(storedState);
          0;
        } catch {
          localStorage.removeItem('state');
        }
      }
    }

    const nextState = reducer(state, action);
    // si lo que venga tiene varible cacheable: false entonces no hacer lo siguiente
    localStorage.setItem('state', JSON.stringify(nextState));

    return reducer(state, action);
  };

// export function logout(reducer: ActionReducer<any>): ActionReducer<any> {
//   return (state, action) => {
//     if (action?.type === authApiActions.logout.type) {
//       return reducer(undefined, { type: INIT });
//     }
//     return reducer(state, action);
//   };
// }

export const metaReducers: MetaReducer[] = [rehydratation];
