import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.users;

export const selectAreUsersLoading = createSelector(selectFeature, state => state.areUsersLoading);
export const selectUsers = createSelector(selectFeature, state => {
  return state.users?.data;
});
