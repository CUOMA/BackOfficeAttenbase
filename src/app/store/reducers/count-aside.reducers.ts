import { createReducer, on } from '@ngrx/store';
import { countAsideApiActions } from '../actions/count-aside.action';

export interface CountAsideState {
  areCountAsideLoading: boolean;
  countAside?: any;
}

export const initialState: CountAsideState = {
  areCountAsideLoading: false,
};

export const countAsideReducer = createReducer(
  initialState,
  on(
    countAsideApiActions.getCountAsideRequest,
    (state): CountAsideState => ({
      ...state,
      areCountAsideLoading: true,
    })
  ),
  on(
    countAsideApiActions.getCountAsideSuccess,
    (state, payload): CountAsideState => ({
      ...state,
      areCountAsideLoading: false,
      countAside: payload,
    })
  ),
  on(
    countAsideApiActions.getCountAsideFailure,
    (state): CountAsideState => ({
      ...state,
      areCountAsideLoading: false,
    })
  )
);

export const countAsideFeatureKey = 'countAside';
