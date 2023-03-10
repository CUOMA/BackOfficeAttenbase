import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.categories;

export const selectAreCategoriesLoading = createSelector(
  selectFeature,
  state => state.areCategoriesLoading
);
