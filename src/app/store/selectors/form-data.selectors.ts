import { createSelector } from '@ngrx/store';

const selectFeature = (state: any) => state.formData;

export const selectFormData = createSelector(selectFeature, state => state.formData);
