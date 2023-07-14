import { createReducer, on } from '@ngrx/store';
import { synonymsApiActions } from '../actions/synonyms.action';

export interface SynonymsState {
  areSynonymsLoading: boolean;
  synonyms: any[];
}

export const initialState: SynonymsState = {
  areSynonymsLoading: false,
  synonyms: [],
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
  )
);

export const synonymsFeatureKey = 'synonyms';
