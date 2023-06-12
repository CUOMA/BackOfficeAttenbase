import { createReducer, on } from '@ngrx/store';
import { Questions } from '../../core/models/questions-response';
import { questionsApiActions } from '../actions/question.action';

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
  ),
  on(questionsApiActions.searchRequest, (state): QuestionsState => {
    return {
      ...state,
      areQuestionsLoading: true,
    };
  }),
  on(
    questionsApiActions.searchSuccess,
    (state, payload): QuestionsState => ({
      ...state,
      areQuestionsLoading: false,
      questions: payload,
    })
  ),
  on(
    questionsApiActions.searchFailure,
    (state): QuestionsState => ({
      ...state,
      areQuestionsLoading: false,
    })
  )
);

export const questionsFeatureKey = 'questions';
