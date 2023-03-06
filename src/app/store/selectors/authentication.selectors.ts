import { createSelector } from '@ngrx/store';
import { AuthenticationState } from '../reducers/authentication.reducers';

const selectFeature = (state: any) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.isAuthenticated
);

export const selectToken = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.user?.token
);

export const selectIsLogginIn = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.isLoggingIn
);
