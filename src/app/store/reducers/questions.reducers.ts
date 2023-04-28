import { createReducer, on } from '@ngrx/store';
import { questionsApiActions } from '../actions/question.action';
import { Questions } from '../../core/models/questions-response';
import { S } from '@angular/cdk/keycodes';

export interface QuestionsState {
  areQuestionsLoading: boolean;
  questions?: Questions;
  paginator: {
    page: number;
  };
}

export const initialState: QuestionsState = {
  areQuestionsLoading: false,
  questions: undefined,
  paginator: {
    page: 0,
  },
};

export const questionsReducer = createReducer(
  initialState,
  on(questionsApiActions.getQuestionsRequest, (state, payload: any): QuestionsState => {
    console.log(payload);
    return {
      ...state,
      areQuestionsLoading: true,
      paginator: {
        page: payload.page,
      },
    };
  }),
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
