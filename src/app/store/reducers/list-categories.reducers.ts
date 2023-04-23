import { createReducer, on } from '@ngrx/store';
import { categoriesApiActions } from '../actions/categories.actions';

export interface ListCategoriesState {
  areListCategoriesLoading: boolean;
  listCategories: any[];
  areListSubcategoriesLoading?: boolean;
  listSubcategories?: any[];
}

export const initialState: ListCategoriesState = {
  areListCategoriesLoading: false,
  listCategories: [],
};

export const listCategoriesReducer = createReducer(
  initialState,
  on(
    categoriesApiActions.getListCategoriesRequest,
    (state): ListCategoriesState => ({
      ...state,
      areListCategoriesLoading: true,
    })
  ),
  on(categoriesApiActions.getListCategoriesSuccess, (state, payload): ListCategoriesState => {
    return {
      ...state,
      areListCategoriesLoading: false,
      listCategories: payload,
    };
  }),
  on(
    categoriesApiActions.getListCategoriesFailure,
    (state): ListCategoriesState => ({
      ...state,
      areListCategoriesLoading: false,
    })
  ),
  on(
    categoriesApiActions.getListSubcategoriesRequest,
    (state): ListCategoriesState => ({
      ...state,
      areListCategoriesLoading: true,
      areListSubcategoriesLoading: true,
    })
  ),
  on(categoriesApiActions.getListSubcategoriesSuccess, (state, payload): ListCategoriesState => {
    return {
      ...state,
      areListCategoriesLoading: false,
      areListSubcategoriesLoading: false,
      listSubcategories: payload,
    };
  }),
  on(
    categoriesApiActions.getListSubcategoriesFailure,
    (state): ListCategoriesState => ({
      ...state,
      areListCategoriesLoading: false,
      areListSubcategoriesLoading: false,
    })
  )
);

export const listCategoriesFeatureKey = 'listCategories';
