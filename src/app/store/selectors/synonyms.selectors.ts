import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.synonyms;

export const selectAreSynonymsLoading = createSelector(
  selectFeature,
  state => state.areSynonymsLoading
);
