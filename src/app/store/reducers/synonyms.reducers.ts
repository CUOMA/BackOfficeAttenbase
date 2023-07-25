import { createReducer, on } from '@ngrx/store';
import { synonymsApiActions } from '../actions/synonyms.action';

export interface SynonymsState {
  areSynonymsLoading: boolean;
  synonyms: any[];
  order: 'ASC' | 'DESC';
}

export const initialState: SynonymsState = {
  areSynonymsLoading: false,
  synonyms: [],
  order: 'ASC',
};

export const synonymsReducer = createReducer(
  initialState,
  on(
    synonymsApiActions.getSynonymsRequest,
    (state): SynonymsState => ({
      ...state,
      areSynonymsLoading: true,
    })
  ),
  on(
    synonymsApiActions.getSynonymsSuccess,
    (state, payload): SynonymsState => ({
      ...state,
      areSynonymsLoading: false,
      synonyms: payload,
    })
  ),
  on(
    synonymsApiActions.getSynonymsFailure,
    (state): SynonymsState => ({
      ...state,
      areSynonymsLoading: false,
    })
  ),
  on(
    synonymsApiActions.deleteSynonymousRequest,
    (state): SynonymsState => ({
      ...state,
      areSynonymsLoading: true,
    })
  ),
  on(
    synonymsApiActions.deleteSynonymsSuccess,
    (state): SynonymsState => ({
      ...state,
      areSynonymsLoading: false,
    })
  ),
  on(
    synonymsApiActions.deleteSynonymsFailure,
    (state): SynonymsState => ({
      ...state,
      areSynonymsLoading: false,
    })
  ),
  on(
    synonymsApiActions.changeOrder,
    (state, order): SynonymsState => ({
      ...state,
      order: order,
    })
  )
);

export const synonymsFeatureKey = 'synonyms';
