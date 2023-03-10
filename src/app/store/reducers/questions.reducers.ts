import { createReducer, on } from '@ngrx/store';
import { questionsApiActions } from '../actions/question.action';
import { Questions } from '../../core/models/questions-response';

export interface QuestionsState {
  areQuestionsLoading: boolean;
  questions?: Questions;
}

export const initialState: QuestionsState = {
  areQuestionsLoading: false,
};

export const questionsReducer = createReducer(
  initialState,
  on(
    questionsApiActions.getQuestionsRequest,
    (state): QuestionsState => ({
      ...state,
      areQuestionsLoading: true,
    })
  ),
  on(
    questionsApiActions.getQuestionsSuccess,
    (state, payload): QuestionsState => ({
      ...state,
      areQuestionsLoading: false,
      questions: payload,
    })
  ),
  on(
    questionsApiActions.getQuestionsFailure,
    (state): QuestionsState => ({
      ...state,
      areQuestionsLoading: false,
    })
  )
);

export const questionsFeatureKey = 'questions';
