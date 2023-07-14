import { createReducer, on } from '@ngrx/store';
import { dataFormApiActions } from '../actions/data-form.actions';

export interface DataFormState {
  question: string | undefined;
  alias: string[] | undefined;
  category: string | undefined;
  subcategory: string | undefined;
  associatedQuestions: string[] | undefined;
  answersIA: string | undefined;
  answersLong: string | undefined;
  answersShort: string | undefined;
  dateFrom: string | undefined;
  dateTo: string | undefined;
  hourFrom: string | undefined;
  hourTo: string | undefined;
}

export const initialState: DataFormState = {
  question: 'Crear Pregunta',
  alias: [],
  category: '',
  subcategory: '',
  associatedQuestions: [],
  answersIA: '',
  answersLong: '',
  answersShort: '',
  dateFrom: '',
  dateTo: '',
  hourFrom: '',
  hourTo: '',
};

export const dataFormReducer = createReducer(
  initialState,
  on(dataFormApiActions.dataformrequest, (state, payload): DataFormState => {
    return {
      ...state,
      question: payload.question,
      alias: payload.alias,
      category: payload.category,
      subcategory: payload.subcategory,
      associatedQuestions: payload.associatedQuestions,
      answersIA: payload.answersIA,
      answersLong: payload.answersLong,
      answersShort: payload.answersShort,
      dateFrom: payload.dateFrom,
      dateTo: payload.dateTo,
      hourFrom: payload.hourFrom,
      hourTo: payload.hourTo,
    };
  })
);

export const dataFormFeatureKey = 'dataForm';
