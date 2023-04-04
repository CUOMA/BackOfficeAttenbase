import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.categories;

export const selectAreCategoriesLoading = createSelector(
  selectFeature,
  state => state.areCategoriesLoading
);
export const selectCategories = createSelector(selectFeature, state => state.categories.data);

export const selectCategory = (id: number) =>
  createSelector(selectFeature, state => {
    return state.categories.data.find((category: any) => category.id === +id);
  });
