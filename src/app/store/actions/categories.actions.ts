import { createActionGroup, props } from '@ngrx/store';

export const categoriesApiActions = createActionGroup({
  source: 'Categories API',
  events: {
    'Get Categories Request': props<{ page: number; order: string }>(),
    'Get Categories Success': props<any>(),
    'Get Categories Failure': props<any>(),

    'Delete Categories Request': props<{ id: number }>(),
    'Delete Categories Success': props<any>(),
    'Delete Categories Failure': props<any>(),

    'Get List Categories Request': props,
    'Get List Categories Success': props<any>(),
    'Get List Categories Failure': props<any>(),

    'Get detail category Request': props<{ id: number }>(),
    'Get detail category Success': props<any>(),
    'Get detail category Failure': props<any>(),

    'Get List Subcategories Request': props<{ id: number }>(),
    'Get List Subcategories Success': props<any>(),
    'Get List Subcategories Failure': props<any>(),

    'Search Request': props<{ query: string }>(),
    'Search Success': props<any>(),
    'Search Failure': props<any>(),
  },
});
