import { state } from '@angular/animations';
import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.listCategories;

export const selectAreListcategoriesLoading = createSelector(
  selectFeature,
  state => state.areListCategoriesLoading
);

export const selectListCategories = createSelector(
  selectFeature,
  state => state.listCategories.data
);

export const selectListSubCategories = createSelector(
  selectFeature,
  state => state.listSubcategories?.data
);

export const selectAreListSubcategoriesLoading = createSelector(
  selectFeature,
  state => state.areListSubcategoriesLoading
);
