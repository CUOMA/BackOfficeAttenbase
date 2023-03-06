import { createReducer, on } from '@ngrx/store';
import { Authentication } from 'src/app/core/models/authentication.dto';
import { authApiActions } from '../actions/authentication.actions';

export interface AuthenticationState {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  error: boolean;
  user?: Authentication;
}

export const initialState: AuthenticationState = {
  isLoggingIn: false,
  isAuthenticated: false,
  error: false,
};

export const authenticationReducer = createReducer(
  initialState,
  on(
    authApiActions.loginRequest,
    (state): AuthenticationState => ({ ...state, isLoggingIn: true, error: false })
  ),
  on(
    authApiActions.loginFailure,
    (state): AuthenticationState => ({
      ...state,
      isLoggingIn: false,
      error: true,
    })
  ),
  on(
    authApiActions.loginSuccess,
    (state, user): AuthenticationState => ({
      ...state,
      user,
      isAuthenticated: true,
      isLoggingIn: false,
      error: false,
    })
  ),
  on(authApiActions.logout, (state): AuthenticationState => initialState)
);

export const authFeatureKey = 'auth';
