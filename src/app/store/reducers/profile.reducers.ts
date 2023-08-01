import { createReducer, on } from '@ngrx/store';
import { profileApiActions } from '../actions/profile.action';

export interface ProfileState {
  areprofileLoading: boolean;
  profile?: any;
}

export const initialState: ProfileState = {
  areprofileLoading: false,
};

export const profileReducer = createReducer(
  initialState,
  on(
    profileApiActions.getProfileRequest,
    (state): ProfileState => ({ ...state, areprofileLoading: true })
  ),
  on(
    profileApiActions.getProfileSuccess,
    (state, payload): ProfileState => ({
      ...state,
      areprofileLoading: false,
      profile: payload,
    })
  ),
  on(
    profileApiActions.getProfileFailure,
    (state): ProfileState => ({
      ...state,
      areprofileLoading: false,
    })
  )
);

export const profileFeatureKey = 'profile';
