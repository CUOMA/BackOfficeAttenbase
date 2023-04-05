import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.questions;

export const selectAreQuestionsLoading = createSelector(
  selectFeature,
  state => state.areQuestionsLoading
);

export const selectQuestions = createSelector(selectFeature, state => {
  return state.questions;
});
