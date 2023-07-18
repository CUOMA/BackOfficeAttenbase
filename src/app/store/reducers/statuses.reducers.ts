import { createReducer, on } from '@ngrx/store';
import { statusesApiActions } from '../actions/statuses.action';
import { QuestionStatus } from '../../core/models/statuses-response';

export interface StatusesState {
  areStatusesLoading: boolean;
  statuses?: QuestionStatus[];
}

export const initialState: StatusesState = {
  areStatusesLoading: false,
};

export const statusesReducer = createReducer(
  initialState,
  on(
    statusesApiActions.getStatusesRequest,
    (state): StatusesState => ({ ...state, areStatusesLoading: true })
  ),
  on(
    statusesApiActions.getStatusesSuccess,
    (state, payload): StatusesState => ({
      ...state,
      areStatusesLoading: false,
      statuses: payload,
    })
  ),
  on(
    statusesApiActions.getStatusesFailure,
    (state): StatusesState => ({
      ...state,
      areStatusesLoading: false,
    })
  )
);

export const statusesFeatureKey = 'statuses';
