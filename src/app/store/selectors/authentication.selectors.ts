import { createSelector } from '@ngrx/store';
import { AuthenticationState } from '../reducers/authentication.reducers';

export const selectFeature = (state: any) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.isAuthenticated
);

export const selectIsLogginIn = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.isLoggingIn
);
