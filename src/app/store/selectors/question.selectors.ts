import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.questions;

export const selectAreQuestionsLoading = createSelector(
  selectFeature,
  state => state.areQuestionsLoading
);

export const selectPaginator = createSelector(selectFeature, state => state.paginator);

export const selectQuestions = createSelector(selectFeature, state => {
  console.log(state.questions);
  return state.questions?.data;
});
