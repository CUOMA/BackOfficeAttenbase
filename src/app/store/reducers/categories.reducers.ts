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
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
    })
  ),
  on(
    categoriesApiActions.getCategoriesFailure,
    (state): CategoriesState => ({
      ...state,
      areCategoriesLoading: false,
    })
  )
);

export const categoriesFeatureKey = 'categories';
