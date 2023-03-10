import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.statuses;

export const selectAreStatusesLoading = createSelector(
  selectFeature,
  state => state.areStatusesLoading
);

export const selectStatuses = createSelector(selectFeature, state => state.statuses);
