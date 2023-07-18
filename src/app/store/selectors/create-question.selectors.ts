import { createSelector } from '@ngrx/store';
import { CreateQuestionState } from '../reducers/create-question.reducers';

const selectFeature = (state: any) => state.createQuestion;

export const selectCreateQuestionMetadata = createSelector(
  selectFeature,
  (state: CreateQuestionState) => state.metadata
);
export const selectCreateQuestionContent = createSelector(
  selectFeature,
  (state: CreateQuestionState) => state.content
);
export const selectCreateQuestionDate = createSelector(
  selectFeature,
  (state: CreateQuestionState) => state.date
);

export const selectCreateQuestionTitle = createSelector(
  selectFeature,
  (state: CreateQuestionState) => state.metadata?.question ?? ''
);
