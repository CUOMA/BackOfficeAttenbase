import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, tap, map } from 'rxjs/operators';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { categoriesApiActions } from '../actions/categories.actions';

@Injectable({ providedIn: 'root' })
export class CategoriesEffects {
  constructor(private actions$: Actions, private categoriesService: CategoriesService) {}
  categories$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(
        categoriesApiActions.getCategoriesRequest.type,
        categoriesApiActions.deleteCategoriesSuccess
      ),
      mergeMap((action: Action & { page: number; order: string }) =>
        this.categoriesService.getCategories(action.page, action.order).pipe(
          map((categories: any) => {
            return categoriesApiActions.getCategoriesSuccess(categories);
          }),
          catchError(() =>
            of(categoriesApiActions.getCategoriesFailure({ error: 'Error on categories' }))
          )
        )
      )
    );
  });
  deleteCategory$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(categoriesApiActions.deleteCategoriesRequest.type),
      mergeMap((action: Action & { id: number }) =>
        this.categoriesService.deleteCategory(action.id).pipe(
          map(res => categoriesApiActions.deleteCategoriesSuccess(res)),
          catchError(() =>
            of((error: any) => of(categoriesApiActions.deleteCategoriesFailure({ error })))
          )
        )
      )
    );
  });
  categoriesList$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(categoriesApiActions.getListCategoriesRequest.type),
      mergeMap(() =>
        this.categoriesService.getCategoriesList().pipe(
          map(listCategories => categoriesApiActions.getListCategoriesSuccess(listCategories)),
          catchError(() =>
            of(categoriesApiActions.getListCategoriesFailure({ error: 'Error on categories' }))
          )
        )
      )
    );
  });
  subcategoriesList$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(categoriesApiActions.getListSubcategoriesRequest.type),
      mergeMap((action: Action & { id: number }) =>
        this.categoriesService.getSubcategoriesList(action.id).pipe(
          map(listSubcategories =>
            categoriesApiActions.getListSubcategoriesSuccess(listSubcategories)
          ),
          catchError(() =>
            of(
              categoriesApiActions.getListSubcategoriesFailure({
                error: 'Error on subcategoriascategories',
              })
            )
          )
        )
      )
    );
  });
}
