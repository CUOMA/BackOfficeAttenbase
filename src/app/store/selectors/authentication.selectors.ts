import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.auth;

export const selectIsAuthenticated = createSelector(selectFeature, state => state.isAuthenticated);

export const selectToken = createSelector(selectFeature, state => state.user?.token);

export const selectIsLogginIn = createSelector(selectFeature, state => state.isLoggingIn);
