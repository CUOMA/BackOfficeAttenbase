import { createReducer, on } from '@ngrx/store';
import { usersApiActions } from '../actions/users.actions';

export interface UsersState {
  areUsersLoading: boolean;
  users?: any;
}

export const initialState: UsersState = {
  areUsersLoading: false,
};

export const UsersReducer = createReducer(
  initialState,
  on(
    usersApiActions.getUsersRequest,
    (state): UsersState => ({
      ...state,
      areUsersLoading: true,
    })
  ),
  on(
    usersApiActions.getUsersSuccess,
    (state, payload): UsersState => ({
      ...state,
      areUsersLoading: false,
      users: payload,
    })
  ),
  on(
    usersApiActions.getUsersFailure,
    (state): UsersState => ({
      ...state,
      areUsersLoading: false,
    })
  )
);

export const usersFeatureKey = 'users';
