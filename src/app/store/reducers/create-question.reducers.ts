import { createReducer, on } from '@ngrx/store';
import { createQuestionActions } from '../actions/create-question.actions';

export interface CreateQuestionState {
  metadata?: CreateQuestionMetadata;
  content?: CreateQuestionContent[];
  date?: CreateQuestionDate[];
}

export const initialState: CreateQuestionState = {
  metadata: {
    alias: '',
    associatedQuestions: [],
    category: '',
    subcategory: '',
    question: 'Crear Pregunta',
  },
  content: [],
  date: [],
};

export const createQuestionReducer = createReducer(
  initialState,
  on(createQuestionActions.createMetadata, (state, metadata): CreateQuestionState => {
    return { ...state, metadata };
  }),
  on(createQuestionActions.createContent, (state, content): CreateQuestionState => {
    return { ...state, content };
  }),
  on(createQuestionActions.createDate, (state, date): CreateQuestionState => {
    return { ...state, date };
  })
);

export const createQuestionFeatureKey = 'createQuestion';

export interface CreateQuestionMetadata {
  question: string;
  alias: any;
  category: string;
  subcategory: string;
  associatedQuestions: string[];
}

export interface CreateQuestionContent {
  title: string;
  answersType: 'long' | 'chat' | 'short';
  articleContent: string;
  data: string;
}
export interface CreateQuestionDate {
  dateFrom: any;
  dateTo: any;
  hourFrom: any;
  hourTo: any;
}
