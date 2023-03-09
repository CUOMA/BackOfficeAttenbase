import { createSelector } from '@ngrx/store';
import { AuthenticationState } from '../reducers/authentication.reducers';

const selectFeature = (state: any) => state.auth;

export const selectIsAuthenticated = createSelector(selectFeature, state => state.isAuthenticated);

export const selectToken = createSelector(selectFeature, state => state.user?.token);

// export const selectIsLogginIn = createSelector(selectFeature, state => state.isLoggingIn);
export const selectIsLogginIn = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.isLoggingIn
);

export const selectIsLogginError = createSelector(
  selectFeature,
  (state: AuthenticationState) => state.error
);
