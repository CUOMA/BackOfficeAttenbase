import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.profile;

export const selectAreProfileLoading = createSelector(
  selectFeature,
  state => state.isProfileLoading
);
export const selectProfile = createSelector(selectFeature, state => {
  return state.profile?.data;
});
