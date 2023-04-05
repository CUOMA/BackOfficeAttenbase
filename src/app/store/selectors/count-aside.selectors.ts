import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.countAside;

export const selectAreCountAsideLoading = createSelector(
  selectFeature,
  state => state.areCountAsideLoading
);
export const selectCountAside = createSelector(selectFeature, state => {
  return state.countAside?.data;
});
