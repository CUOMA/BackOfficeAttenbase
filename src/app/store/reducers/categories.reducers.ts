import { createReducer, on } from '@ngrx/store';
import { categoriesApiActions } from '../actions/categories.actions';

export interface CategoriesState {
  areCategoriesLoading: boolean;
  categories: any[];
}

export const initialState: CategoriesState = {
  areCategoriesLoading: false,
  categories: [],
};

export const categoriesReducer = createReducer(
  initialState,
  on(
    categoriesApiActions.getCategoriesRequest,
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: true,
    })
  ),
  on(
    categoriesApiActions.getCategoriesSuccess,
    (state, payload): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
      categories: payload,
    })
  ),
  on(
    categoriesApiActions.getCategoriesFailure,
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
    })
  ),
  on(
    categoriesApiActions.deleteCategoriesRequest,
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
    })
  ),
  on(
    categoriesApiActions.deleteCategoriesSuccess,
    (state, payload): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
      categories: payload,
    })
  ),
  on(
    categoriesApiActions.deleteCategoriesFailure,
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
    })
  )
);

export const categoriesFeatureKey = 'categories';
